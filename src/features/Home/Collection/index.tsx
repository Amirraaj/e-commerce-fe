import React from "react";
import Popular from "../../../assets/Collection/Popular.jpg";
import Childrent from "../../../assets/Collection/Childrengt.jpg";
import Men from "../../../assets/Collection/Men.jpg";
import Girl from "../../../assets/Collection/Girl.jpg";
import Stylist from "../../../assets/Collection/Stylist.jpg";
import { Button } from "antd";
function Collection() {
  return (
    <section className="Collection my-10">
      <div className="title text-primary font-bold text-center py-5 text-3xl">
        Collection
      </div>
      <div className="collection-section flex flex-col sm:flex-row justify-center items-center h-10 px-5 gap-5 w-full h-full sm:h-[50vh] lg:h-[85vh]">
        <div className="flex flex-col w-full sm:w-[28.5%] h-full gap-5">
          <div className="flex w-full h-[30vh] sm:h-full bg-primary  overflow-hidden relative">
            <img
              src={Men}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />  
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-semibold text-2xl pointer-events-none font-medium">Men's Clothes</h1>  
          </div>
          <div className="flex w-full h-[30vh] sm:h-full bg-primary overflow-hidden relative">
            <img
              src={Girl}
              alt=""
              className="Collection-image  w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
           <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-semibold text-2xl pointer-events-none font-medium">Women's Clothes</h1>  

          </div>
        </div>
        <div className="w-full sm:w-[43%] h-[40vh] sm:h-full bg-primary overflow-hidden relative">
          <img
            src={Popular}
            alt=""
            className="Collection-image w-full h-full object-cover object-top cursor-pointer hover:scale-110 hover:opacity-80"
            style={{ transition: "all 400ms ease-in-out" }}
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-semibold text-2xl pointer-events-none font-medium">Most Popular</h1>  
        </div>
        <div className="flex flex-col w-full sm:w-[28.5%] h-full gap-5">
          <div className="flex w-full h-[30vh] sm:h-full  bg-primary overflow-hidden relative">
            <img
              src={Stylist}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-semibold text-2xl pointer-events-none font-medium">Staff Choice</h1>  
          </div>
          <div className="flex w-full h-[30vh] sm:h-full bg-primary overflow-hidden relative">
            <img
              src={Childrent}
              alt=""
              className="Collection-image w-full h-full object-cover cursor-pointer object-top hover:scale-110 hover:opacity-80"
              style={{ transition: "all 400ms ease-in-out" }}
            />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-semibold text-2xl pointer-events-none font-medium">Childrent's Clothes</h1>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
