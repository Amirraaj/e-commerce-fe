import React from "react";
import AdminLayout from "../../../layout/Admin";
import { Button, Space, Table, Tag, Popconfirm, notification } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: String;
  price: Number;
  discount: String;
  category: String;
}
function click(){
    notification.success({message:"clicked"})
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
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (_, { category }) => (
      <Tag color={"#AE9BC8"}>{category.toUpperCase()}</Tag>
    ),
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

const data = [
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "5%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "10%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "3%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "10%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "30%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "20%",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "-",
    category: "men",
  },
  {
    key: "1",
    name: "Hoodie",
    price: 400,
    discount: "5%",
    category: "men",
  },
];

function AdminProduct() {
 const navigate = useNavigate()
  const addProd = () =>{
     navigate("/adminproduct/create")
  }
  return (
    <AdminLayout>
      <section className="py-10 px-14">
        <div className="table bg-light w-full h-screen rounded-2xl p-10">
          <Table
            columns={columns}
            dataSource={data}
            title={() => (
              <div className="flex justify-between items-center">
                {" "}
                <h1 className="text-2xl text-primary font-medium">
                  Product
                </h1>{" "}
                <Button type="primary" size="large" onClick={()=>addProd()}>
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
