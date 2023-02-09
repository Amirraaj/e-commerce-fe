import { Button } from "antd";
import React from "react";

function RegisterPage() {
  return (
    <section className="flex justify-center items-center p-20  bg-secondary">
      <div className=" bg-primary flex justify-center items-center rounded-[5rem] overflow-hidden" style={{ boxShadow: "9px 13px 34px -13px rgba(110,82,199,0.75)" }}>
        <div className="login-image-holder flex justify-center items-center p-28">
          <div className="login-image w-[390px] h-[390px] bg-light rounded-[5rem]"></div>
        </div>
        <div className="login-form bg-light p-[3.5rem] w-[29rem]">
          <h1 className="rounded-full bg-primary px-11 py-3 font-medium text-4xl text-light text-center ">
            Welcome
          </h1>
          <h1 className="text-3xl text-primary my-10">Create Account</h1>
          <form>
            <div>
              <input
                className="w-full text-2xl text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="FirstName"
              />
            </div>
            <div className="mt-8">
              <input
                className="w-full text-2xl text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="LastName"
              />
            </div>
            <div className="mt-8">
              <input
                className="w-full text-2xl text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="UserName"
              />
            </div>
            <div className="mt-8">
              <input
                className="w-full text-2xl text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="email"
                placeholder="Email"
              />
              </div>
            <div className="mt-8">
              <input
                className="w-full text-2xl text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
            <Button type="primary" size="large" className="!px-10 !pb-11  !rounded-full !text-2xl">Register</Button>
            </div>
          </form>
          
          <div className="mt-8 flex justify-center items-center">
          <span className="text-center text-sm text-primary cursor-pointer opacity-90 hover:opacity-100">Have Account?</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
