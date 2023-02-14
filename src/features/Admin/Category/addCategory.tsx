import React from "react";
import AdminLayout from "../../../layout/Admin";
import { categorySchema } from "../../../validation/Admin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { Col, Row, Alert, Button, Dropdown, Input } from "antd";

import { HexColorPicker } from "react-colorful";
type ProductFormData = z.infer<typeof categorySchema>;

function AddCategory() {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ProductFormData>({
    resolver: zodResolver(categorySchema),
    mode: "onBlur", // "onChange"
  });
  const onSubmit = async (data: ProductFormData) => {
    console.log(data)
  };

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">
            Add Category Product
          </h1>
          <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={16}>
              <Col span={24}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Product Name *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="product"
                    type="text"
                    placeholder="Product Name"
                    {...register("title")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="title"
                    render={({ message }) => (
                      <Alert
                        message={message}
                        type="error"
                        className="mt-2 text-center"
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Description *
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    rows={4}
                    placeholder="Description "
                    {...register("description")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="description"
                    render={({ message }) => (
                      <Alert
                        message={message}
                        type="error"
                        className="mt-1 text-center"
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>  
            <Button htmlType="submit" size="large" className="mt-2">
              + Add Category
            </Button>
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AddCategory;
