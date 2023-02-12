import { Col, Row } from "antd";
import React from "react";
import UploadImage from "../../../constants/Upload";
import AdminLayout from "../../../layout/Admin";

function AddProduct() {
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">Add new Product</h1>
          <form className="my-5">
            <Row gutter={16}>
              <Col span={12}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Product Name *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="product"
                    type="text"
                    placeholder="Product Name"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Price *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="text"
                    placeholder="Price "
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Intro *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="intro"
                    type="text"
                    placeholder="intro "
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Discription *
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="discription"
                    rows={4}
                    placeholder="Discription "
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Category*
                  </label>
                  <select
                    className="shadow appearance-none border rounded cursor-pointer w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    placeholder="Category"
                  >
                    <option value="">Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Childrent">Childrent</option>
                  </select>
                </div>
              </Col>
              <Col span={12}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Discount *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="discount"
                    type="text"
                    placeholder="Discount "
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Image *
                  </label>
                  <UploadImage />
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AddProduct;
