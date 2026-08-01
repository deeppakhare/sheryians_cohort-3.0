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
       

        <button type="submit" onClick={() => {
            addProduct(title,description,category,price,image);
        }}>Add Product</button>
     
    </div>
  );
};

export default AddProduct;
