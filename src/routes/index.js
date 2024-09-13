import SiteRouter from "./site.js";
import NewsRouter from "./news.js";
const newsRouter = NewsRouter;
const siteRouter = SiteRouter;
export default function 

route(app) {
                 app.use("/news", newsRouter);
  
                   app.use("/", siteRouter);
}
