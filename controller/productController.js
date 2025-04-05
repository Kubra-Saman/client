import Product from "../model/productModel.js";

export const addProductController = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      status: "active",
    });
    await product.save();
    return res.status(200).json({
      success: true,
      message: "Product Added Successfully",
      product: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    return res
      .status(200)
      .json({ success: true, length: products.length, products: products });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getOneProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: id });
    return res.status(200).json({ success: true, product: product });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const removeProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "product removed successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
