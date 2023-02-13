import { Button, Col, Row, Alert, notification } from "antd";
import React, { useEffect, useState } from "react";
import UploadImage from "../../../constants/Upload";
import AdminLayout from "../../../layout/Admin";
import { productSchema } from "../../../validation/Admin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";

type ProductFormData = z.infer<typeof productSchema>;

function AddProduct() {
  const [imageName, setImageName] = useState("");
  const [isToched, setIsToched] = useState(false);

  useEffect(() => {
    console.log(imageName);
  }, [imageName]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: "onBlur", // "onChange"
  });
  console.log(process.env.REACT_APP_IMAGE_PATH,"dyadavsduasdyasdy")
  const onSubmit =  (data: ProductFormData) => {
    console.log(data);

  };

  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <h1 className="text-2xl text-primary text-medium">Add new Product</h1>
          <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("name")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
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
                    {...register("price")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="price"
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
                    Intro *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="intro"
                    type="text"
                    placeholder="intro "
                    {...register("intro")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="intro"
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
                    {...register("category")}
                  >
                    <option value="">Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Childrent">Childrent</option>
                  </select>
                  <ErrorMessage
                    errors={errors}
                    name="category"
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
                    {...register("discount")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="discount"
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
            <Row>
              <Col span={6}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Photo *
                  </label>
                  <UploadImage setImageName={setImageName} />
                  <input
                    type="text"
                    value={imageName}
                    {...register("photo")}
                    className="w-[0.1px]"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="photo"
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
            <Button htmlType="submit" size="large" className="mt-2">
              + Add Product
            </Button>
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}

export default AddProduct;
