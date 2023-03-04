import React, { useState } from "react";
import Layout from "../../../layout/Customer";
import PaymentDetails from "./PaymentDetails";
import ProductList from "./ProductList";
import { Alert, Space, Spin } from "antd";
function PaymentPage() {
  const [showloading, setShowLoading] = useState<boolean>(true);
  return (
    <Layout>
      <div className="flex p-14 relative">
        <ProductList />
        <PaymentDetails />
      </div>
    </Layout>
  );
}

export default PaymentPage;
