const router = require("express").Router();
const { User } = require("../db/index");
const { requireToken, isAdmin } = require("../middleware");

// GET /api/admin/users
// router.get('/users', requireToken, isAdmin, async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post('/', async (req, res, next) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
