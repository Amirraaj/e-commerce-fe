import { Radio, Col, InputNumber, Row, Slider, Space, Button } from "antd";
import clsx from "clsx";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";

const CartItem = () => {
  const [value, setValue] = useState(1);
  const [inputValue, setInputValue] = useState(1);

  const handelQuantity = (newValue: number) => {
    setInputValue(newValue);
  };
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="cart-data-container relative">
      <i className="fa-solid fa-xmark text-[1.5rem] text-primary absolute top-2 right-5 cursor-pointer"></i>
      <div className="cart-data flex items-start gap-4 shadow p-2">
        <div className="image-container bg-secondary flex items-center justify-center h-[10rem] p-3">
          <img
            src="http://res.cloudinary.com/dehuqnzug/image/upload/v1676890433/eeieznykcisuyt9m0iw7.png"
            alt=""
            className="cover w-full h-full  "
          />
        </div>
        <div>
          <h1 className="text-lg">Hoodie for men</h1>
          <h1 className="text-base mt-2">Rs.300</h1>
          <Radio.Group onChange={onChange} value={value} className="mt-2">
            <Radio value={1}>2Xl</Radio>
            <Radio value={2}>Xl</Radio>
            <Radio value={3}>L</Radio>
            <Radio value={4}>M</Radio>
          </Radio.Group>
          <div className="flex flex w-full items-center gap-5 mt-2">
            <span>Quantity</span>
            <Slider
              min={0}
              max={5}
              className="w-full"
              defaultValue={1}
              onChange={handelQuantity}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function CardList({ setShowCart, showCart }: any) {
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
      <div className="flex flex-col px-10 gap-10">
        <CartItem />
        <CartItem />
      </div>

      <div className="flex items-center justify-center">
        <Button type="primary" className="mx-10 my-20 px-10" size="large">
          {" "}
          Checkout{" "}
        </Button>
      </div>
    </section>
  );
}

export default CardList;
