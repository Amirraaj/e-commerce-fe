import React, { useState } from "react";
import { registerSchema } from "../../../validation/Customer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { signUp } from "../../../api/Customer/index";
import KJInput from "../../../constants/KJInput";
import KJTextarea from "../../../constants/KJTextArea";
import { Col, Row, Radio, Button } from "antd";
import clsx from "clsx";
import type { RadioChangeEvent } from 'antd';
type ContactUsFormData = z.infer<typeof registerSchema>;

function PaymentDetails() {
    const [isSelected , setIsSelected] = useState(false)
    const [value, setValue] = useState(0);
   
    
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur", // "onChange"
  });
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setIsSelected(true)

  };
  return (
    <div className="w-1/2 pr-14">
      <h1 className="my-2 text-xl font-medium">Your Order</h1>
      <form className="mt-4">
        <Row gutter={12}>
          <Col span={12}>
            <KJInput
              name="name"
              control={control}
              label="Reciver Name"
              parentClass=""
              register={register}
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Product Name"
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
          <Col span={12}>
            <KJInput
              name="name"
              control={control}
              label="Reciver Number"
              parentClass=""
              register={register}
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Product Name"
              required
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <KJTextarea
              name="description"
              control={control}
              register={register}
              label="Location Description"
              parentClass=""
              labelClass="block text-gray-700 text-sm font-medium mb-2"
              error={errors}
              placeholder="Description"
              inputClass="shadow appearance-none border rounded border-[#bababa] w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={24}>
            <Radio.Group className="flex flex-col gap-5" onChange={onChange} value={value}>
              <Radio value={1} className={clsx(`py-3 px-5 ${isSelected ? "bg-[#ebe9f0] " : "bg-[#f8f7fa] "}   w-full rounded`)}>
                Cash on Delivery
              </Radio>
              <Radio value={2} disabled={true} className="py-3 px-5 bg-[#f8f7fa] w-full rounded">
                <div>Pay via Digital Wallet  (comming soon...)</div>
              </Radio>
            </Radio.Group>
          </Col>
        </Row>

        <div className="flex mt-10 gap-10 items-center justify-center" >
            <Button type="primary" size="large">Order Now</Button>
            <Button size="large">Cancle</Button>
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;
