const router = require("express").Router();
const { Cart, CartProduct } = require("../db/index");

const { requireToken } = require("../middleware");

//gets current cart
router.get("/", requireToken, async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.user.id,
        isCart: true,
      },
      include: {
        model: CartProduct,
      },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const cartId = req.params.id;
    //in req.body = {productId, qty}
    const [userCart] = await CartProduct.findOrCreate({
      where: {
        cartId: cartId,
        productId: req.body.productId,
      },
    });
    await userCart.update({ quantity: req.body.quantity });

    if (userCart.quantity === 0) {
      await userCart.destroy();
    }
    res.json(userCart);

    //sends the above object {cartId, productId, quantity}
  } catch (err) {
    next(err);
  }
});

//for signed in users updates active cart to "order" and creates a new active cart
router.put("/:id/checkout", requireToken, async (req, res, next) => {
  try {
    const cartId = req.params.id;
    const cart = await Cart.findByPk(cartId);
    await cart.update({ isCart: false });
    const newCart = await req.user.createCart();
    const returnCart = await Cart.findCartWithProducts(newCart.id);
    res.json(returnCart);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
