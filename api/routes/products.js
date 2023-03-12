// const router = require("express").Router();
const app = require("express")();
// const { Product, User } = require("../../db/index");
// const { requireToken, isAdmin } = require("../middleware");

// GET /api.products
// router.get("/", async (req, res, next) => {
//   try {
//     // const products = await Product.findAll();
//     // res.json(products);
//     res.json({ user: "Kevin" });
//   } catch (err) {
//     next(err);
//   }
// });

app.get("/", async (req, res, next) => {
  try {
    // const products = await Product.findAll();
    // res.json(products);
    res.json({ user: "Kevin" });
  } catch (err) {
    next(err);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    // const products = await Product.findAll();
    // res.json(products);
    res.json({ user: "Tina" });
  } catch (err) {
    next(err);
  }
});

//  GET /api/products/:id
// router.get("/:id", async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     res.json(product);
//   } catch (err) {
//     next(err);
//   }
// });

// POST api/products
// router.post("/", requireToken, isAdmin, async (req, res, next) => {
//   try {
//     res.status(201).send(await Product.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// DELETE api/products/:id
// router.delete("/:id", requireToken, isAdmin, async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     await product.destroy();
//     res.send(product);
//   } catch (error) {
//     next(error);
//   }
// });

// UPDATE /api/products/:id
// router.put("/:id", requireToken, isAdmin, async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     res.send(await product.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = app;
