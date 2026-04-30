import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    await Product.create({
      name,
      description,
      price,
      category,
      image,
    });

    res.status(201).json({ message: "Product Added Successfully.!" });
  } catch (err) {
    res.status(501).json({ message: err });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if(!productId){
        res.status(401).json({message:"Product Not Found.!!"});
    }
    await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.status(201).json({message:"Product Updated successfully!!"});
  } catch (err) {
    res.status(501).json({ message: err });
  }
};
