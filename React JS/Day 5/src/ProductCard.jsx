import React from "react";

const ProductCard = ({product}) => {

    console.log(product);
    
    
  return (
    <div>
      <div className="text-white border-2 p-5 flex flex-col w-70 gap-5 bg-blue-300">
        <img
          className="w-30 h-50 flex items-center justify-center"
          src={product.image}
          alt=""
        />
        <h1>{product.title.substring(0,20)}</h1>
        <p className="text-[13px]">{product.category}</p>
        <p className="text-green-600">{product.price}</p>
        <button className="bg-amber-300 p-3 text-[20px] font-bold font-mono">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
