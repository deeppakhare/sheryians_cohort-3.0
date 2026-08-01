import React, {useState} from "react";


const AddProduct = ({ addProduct }) => {
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage ] = useState("");
    return (
    <div>
      <h1>Add Product Form</h1>
       
        <label htmlFor="">Add Title</label>
        <input  type="text" placeholder="Title" value={title} onChange={(elem) => setTitle(elem.target.value)}/> <br />
        <label htmlFor="">Add Description</label>
        <input  type="text" placeholder="Description" value={description} onChange={(elem) => setDescription(elem.target.value)}/> <br />
        <label htmlFor="">Add Category</label>
        <input  type="text" placeholder="Category" value={category} onChange={(elem) => setCategory(elem.target.value)}/> <br />
        <label htmlFor="">Add Price</label>
        <input  type="text" placeholder="Price" value={price} onChange={(elem) => setPrice(elem.target.value)}/> <br />
        <label htmlFor="">Add Image URL</label>
        <input  type="text" placeholder="Image Url" value={image} onChange={(elem) => setImage(elem.target.value)}/> <br />

        <button onClick={() => {
            addProduct(title,description,category,price,image);
        }}>Add Product</button>
     
    </div>
  );
};

export default AddProduct;
