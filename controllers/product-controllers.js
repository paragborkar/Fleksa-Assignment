import Product from '../models/Product.js';

export const getAllProducts = async (req,res) =>{
   try{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    });
   }catch(error)
   {
    res.status(400).json({ message: error.message });
   }
}

export const addProduct = async (req,res) =>{
    let {name,price,description,category,createdAt} = req.body;
   
    const product = new Product({
        name,
        price,
        description,
        category,
        createdAt
    });
    try{
       await product.save();
    }catch(err){
    { 
        res.status(400).json({ error: "Unable To Add New Product" })
    }
}
return res.status(200).json({product});
}

export const updateProduct = async (req, res) => {
    const _id= req.params._id;
    const { name,price,description,category,createdAt } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(_id, {name,price,description,category,createdAt}, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product Not Found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
export const deleteProduct = async (req, res) => {
    const  _id  = req.params._id;
  
    try {
      const deletedProduct = await Product.findByIdAndRemove(_id);
  
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product Not Found' });
      }
  
      res.status(200).json({ message: 'Product Deleted Successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};