const { User } = require("../../db/index");

//middleware  that converts token into user object
const requireToken = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const user = await User.byToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

// middleware that authenticates admin
const isAdmin = async (req, res, next) => {
  try {
    if (req.user.isAdmin === false) res.status(403);
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = { requireToken, isAdmin };
