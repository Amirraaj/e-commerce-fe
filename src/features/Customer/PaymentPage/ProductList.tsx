import React from "react";

const Product = () => {
  return (
    <div className="cart-data flex items-start gap-4 shadow bg-emerald-100 p-2 mt-4">
      <div className="image-container bg-secondary flex items-center justify-center h-[7rem] p-1">
        <img
          src="http://res.cloudinary.com/dehuqnzug/image/upload/v1676890433/eeieznykcisuyt9m0iw7.png"
          alt=""
          className="cover w-full h-full  "
        />
      </div>
        <div className="content">
            <h1 className="text-xl">Hoodie for</h1>
            <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32 ">Price: Rs 2000</h1>
            <h1 className="mt-1 text-base w-32"> Quantity: 5</h1>
            </div>
            <div className="flex items-center gap-4">
            <h1 className="mt-1 text-base w-32">Size: 2Xl</h1>
            <h1 className="mt-1 text-base w-32"> Color: Blue</h1>
            </div> 
        </div>
    </div>
  );
};

function ProductList() {
  return (
    <section className="flex flex-col w-1/2 pl-20 ">
        <div className="w-[90%]">
    <h1 className="my-2 text-xl font-medium">Your Order</h1>
      <Product />
      <Product />
      <Product />
    
     <div className="total-amount flex justify-between items-center mt-10">
      <h1 className="text-xl font-medium">Total</h1>
      <h1 className="text-xl font-medium">Rs 4000</h1>
     </div>
        </div>
    </section>
  );
}

export default ProductList;
