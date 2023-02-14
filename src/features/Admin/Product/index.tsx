import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, Space, Table, Tag, Popconfirm, notification } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../../../api/Admin";
interface DataType {
  key: string;
  name: String;
  price: Number;
  discount: String;
  category: String;
}
function click() {
  notification.success({ message: "clicked" });
}
const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
    render: (text) => <a>{text? text: "-"}</a>,
  },
  {
    title: "Category",
    dataIndex: "category_id",
    key: "category_id",
    render: item => (<Tag color={"#AE9BC8"}>{Object.values(item.title)}</Tag>),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size={50}>
        <i className="fa-solid fa-pen-to-square text-primary  cursor-pointer hover:text-secondary"></i>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this product?"
          okText="Yes"
          onConfirm={click}
          cancelText="No"
          icon={<i className="fa-solid fa-circle-question text-[red]"></i>}
        >
          <i className="fa-solid fa-trash text-[#ed1d24]  cursor-pointer hover:text-[#d4353f]"></i>
        </Popconfirm>
      </Space>
    ),
  },
];



function AdminProduct() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = async () => {
    const products = await getAllProduct();
    console.log(products.data.data,"hhhhhhh");
    if(products?.data?.status === 200){
      setAllProducts(products?.data?.data)
    }
  };

  const addProd = () => {
    navigate("/adminproduct/create");
  };
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={allProducts}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Product
                </h1>{" "}
                <Button type="primary" size="large" onClick={() => addProd()}>
                  + Add Product
                </Button>
              </div>
            )}
          />
        </div>
      </section>
    </AdminLayout>
  );
}

export default AdminProduct;
