import express from "express";
import path from "path";
import * as sass from "sass";
import { fileURLToPath } from "url";
import { create as createHandlebars } from "express-handlebars";
import fs from "fs";
import chokidar from "chokidar";

import route from "./routes/index.js";

       const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Function to compile SCSS to CSS
const compileSCSS = () => {
  const result = sass.compile(path.join(__dirname, "resources/scss/app.scss"));
  fs.writeFileSync(path.join(__dirname, "public/css/app.css"), result.css);
  console.log("SCSS compiled to CSS.");
};

// Compile SCSS initially
compileSCSS();

// Watch for changes in SCSS files and recompile on change
chokidar
  .watch(path.join(__dirname, "resources/scss/**/*.scss"))
  .on("change", () => {
    console.log("SCSS file changed. Recompiling...");
    compileSCSS();
  });

// HTTP Logger
// app.use(morgan('combined'));

// Template engine
const hbs = createHandlebars({
  extname: ".hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); // Thư mục chứa views

// Routes init
route(app);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
