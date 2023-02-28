import { Button } from "antd";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { CartItem } from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { CartState } from "../../../Redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

function CardList({ setShowCart, showCart }: any) {
  const cart = useSelector((state: CartState) => state.items);
  const dispatch = useDispatch
  const navigate = useNavigate()
  const handelCheckout =() => {
    navigate('/payment');
  }
  const handelClear = () =>{
   
  }
  return (
    <section
      className={clsx(
        "fixed top-0 bottom-0  right-0 left-[60%] z-50 bg-[#fff] drop-shadow-2xl translate-x-[110%] overflow-auto",
        showCart && "translate-x-[0%]"
      )}
      style={{ transition: "all 300ms ease-in-out" }}
    >
      <div className="flex items-center justify-between px-14 py-10">
        <span className="text-3xl text-primary font-medium">Cart</span>
        <i
          className="fa-solid fa-xmark text-[1.5rem] text-primary cursor-pointer"
          onClick={() => setShowCart(false)}
        ></i>
      </div>
      <div className="flex flex-col px-10 gap-10">{
        cart.map((item) =>{
        return<CartItem {...item} key={item.id} />
       })
      }</div>

      <div className="flex items-center justify-center mt-10 gap-5">

        <Button type="primary" className="" size="large" onClick={handelCheckout}>
          {" "}
          Checkout{" "}
        </Button>
        <Button  className="" size="large" onClick={handelClear}>
          {" "}
          Clear Cart{" "}
        </Button>
      

      </div>
    </section>
  );
}

export default CardList;
