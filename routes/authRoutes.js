const passport = require("passport");

module.exports = (app) => {
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      console.log("hello");
      if (err) throw err;
      if (!user) {
        res.redirect("/");
      } else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.redirect("/");
        });
      }
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user", (req, res) => {
    res.send(req.user);
  });
};
