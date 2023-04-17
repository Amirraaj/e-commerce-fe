import React from 'react'
import { ICart, IProduct } from '../../../types';


function Products({products}:any) {

    console.log(products)
    const Product = ({id, name, price, quantity, size ,photo}:ICart) => {
        return (
          <div className="cart-data flex items-start gap-4 shadow bg-emerald-100 p-2 mt-4">
            <div className="image-container bg-secondary flex items-center justify-center h-[7rem] p-1">
              <img
                src={photo}
                alt=""
                className="cover w-full h-full  "
              />
            </div>
              <div className="content">
                  <h1 className="text-xl">{name}</h1>
                  <div className="flex items-center gap-4">
                  <h1 className="mt-1 text-base w-32 ">Price: Rs.{price}</h1>
                  <h1 className="mt-1 text-base w-32"> Quantity: {quantity}</h1>
                  </div>
                  <div className="flex items-center gap-4">
                  <h1 className="mt-1 text-base w-32">Size: {size}</h1>
                  </div> 
              </div>
          </div>
        );
      };

  return (
    <div className="wrapper">
        <h1>Products</h1>
        {
            products?.map((item:ICart) =>{
                return <Product {...item} key={item.id} />
            })
        }

    </div>
  )
}

export default Products