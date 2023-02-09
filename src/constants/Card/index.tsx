import { Button } from "antd";
import React from "react";
import Hoodie from "../../assets/Clothes/kindpng_623334.png";
import "./style.css";
function Card() {
  return (
    <div
      className="card cursor-pointer"
      style={{ boxShadow: "5px 5px 15px -9px rgba(0,0,0,0.45)" }}
    >
      <div className="ribbon" style={{ boxShadow: "5px -5px 15px -9px rgba(0,0,0,0.45)"}} >
      <span className="ribbon-2"></span>
      <span className="discount-text "> 10%</span>
      </div>
      <i className="fa-regular fa-heart fa-xl text-[#fff] absolute top-10 right-5"></i>
      <i className="fa-solid fa-share fa-xl text-[#fff] absolute top-20 right-5"></i>
      <div className="h-[40%] bg-primary px-5 py-3 flex justify-center rounded-tl-[20px] rounded-tr-[20px]">
        <img src={Hoodie} alt="" className="card-image w-[180px] h-[270px]  " />
      </div>
      <div className="card-content px-5">
        <div className=" mt-24 flex flex-col items-center justify-center ">
          <h1 className="uppercase text-xl font-semibold">Hoodie for men</h1>
          <div className="px-5 text-center">
            <h2 className="text-sm my-2 font-medium opacity-70 ">
              Premiume quality hoody for your stylish lifestyle
            </h2>
          </div>
        </div>
        <div className="flex justify-between items-center text-2xl mt-5">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
              <i className="fa-regular fa-star text-[18px]"></i>
            </div>
            <span className="font-medium">Rs 2000</span>
          </div>
          <i className="fa-solid fa-cart-shopping text-[40px]"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
