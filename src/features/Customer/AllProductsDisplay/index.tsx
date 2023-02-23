import React, { useEffect, useState } from "react";
import { Col, Row, Radio, Space, Slider, Input } from "antd";
import type { SliderMarks } from "antd/es/slider";
import type { RadioChangeEvent } from "antd";
import Card from "../../../constants/Card";
import Layout from "../../../layout/Customer";
import { getAllProducts } from "../../../api/Customer/product";
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { IProduct } from "../../../types";

function AllProductsDisplay() {
  const [value, setValue] = useState(1);
  const [productArray, setProductArray] = useState<IProduct[]>();

  useEffect(() => {
    allProduct();
  }, []);

  const allProduct = async () => {
    const products = await getAllProducts();
    setProductArray(products?.data?.data);
  };
  const marks: SliderMarks = {
    0: "0",
    20: "20",
    40: "40",
    60: "60",
    80: "80",
    100: "100",
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 19,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value: string) => console.log(value);

  return (
    <Layout>
      <section className="flex relative">
        <div className=" py-14 pl-5 min-w-[22rem] max-w-[22rem] fixed">
          <div className="p-2 bg-[#e4eaf5] pb-10 rounded-3xl px-7">
            <span className="text-3xl font-medium flex justify-center items-center mt-5">
              <i className="fa-solid fa-filter"></i> Filter
            </span>
            <div className="mt-5 flex flex-col items-start">
              <span className="text-lg font-medium">Search</span>
              <Search placeholder="search ..." size="large" className="border-none rounded mt-3 text-gray-700 leading-tight" allowClear onSearch={onSearch} />
            </div>
            <div className="mt-5 flex flex-col items-start">
              <span className="text-lg font-medium">Category</span>
              <Radio.Group onChange={onChange} value={value} className="mt-3">
                <Space direction="vertical">
                  <Radio value={1}>All</Radio>
                  <Radio value={2}>Men</Radio>
                  <Radio value={3}>Women</Radio>
                  <Radio value={4}>Childrent</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className="mt-5 flex flex-col items-start">
              <span className="text-lg font-medium">
                Price<span className="text-sm"> ( in 00)</span>
              </span>
              <Slider
                range
                marks={marks}
                className="w-full mt-3"
                defaultValue={[0, 0]}
              />
            </div>
            <div className="mt-5 flex flex-col items-start">
              <span className="text-lg font-medium">
                Discount<span className="text-sm"> ( in %)</span>
              </span>
              <Slider
                range
                marks={marks}
                className="w-full mt-3"
                defaultValue={[0, 0]}
              />
            </div>
          </div>
        </div>
        <div className=" p-14 flex gap-10 ml-[22rem] ">
          <Row gutter={[24, 50]}>
            {productArray?.map((item: IProduct, index: number) => {
              return (
                <Col span={8} key={index}>
                    <Card
                      _id={item._id}
                      photo={item.photo}
                      name={item.name}
                      intro={item.intro}
                      discount={item.discount}
                      price={item.price}
                    />
                  
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </Layout>
  );
}

export default AllProductsDisplay;
