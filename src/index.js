import express from 'express';
import path from 'path'
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { create as createHandlebars } from 'express-handlebars';

const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// HTTP Logger
app.use(morgan('combined'));

// Template engine
const hbs = createHandlebars({
  extname: '.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// Route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
