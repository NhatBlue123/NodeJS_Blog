class NewsController {
  //[GET] --> /news
  index(req, res) {
    res.render("news");
  }
  //[GET] --> /news/:slug
  show(req,res) {
    res.render("detail");
  }
}

export default new NewsController();
