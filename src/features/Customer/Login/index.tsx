import { Alert, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/Clothes/login.jpg"

function LogInPage() {
  return (
    <section className="flex justify-center items-center p-10 md:p-20  bg-secondary">
      <div
        className="flex rounded-3xl overflow-hidden" 
        style={{ boxShadow: "9px 13px 34px -13px rgba(110,82,199,0.75)" }}
      >
        <div className="max-w-md min-w-[20rem] hidden sm:block">
            <img src={loginImage} alt="" className="object-cover h-full" />
          </div>
        <div className="login-form bg-light p-5 md:p-[3.5rem] w-[29rem]">
        <div className="flex justify-center">
        <h1 className="text-primary px-2  py-3 font-semibold text-4xl md:text-5xl  text-center font-secondary">
            Welcome
          </h1>
          </div>
          <h1 className="text-2xl md:text-3xl text-primary my-10">Login Your Account</h1>
          <form>
            <div>
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type=""
                placeholder="Email"
              />
              {/* <Alert
                message="Invalid Password"
                type="error"
                className="mt-1 text-center"
              />  */}
            </div>
            <div className="mt-8">

              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="password"
                placeholder="Password"
              />
              {/* <Alert
                message="Invalid Password"
                type="error"
                className="mt-1 text-center"
              /> */}
            </div>
            <div className="mt-8 flex justify-center items-center">
              <Button
                type="primary"
                size="large"
                className="!px-10 !pb-11  !rounded-full !text-2xl"
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="mt-4 flex justify-center items-center">
          <Link to="/register"><span className="text-center text-xl text-primary cursor-pointer opacity-90 hover:opacity-100">
              Create Account
            </span>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <span className="text-center text-sm text-primary cursor-pointer opacity-90 hover:opacity-100">
              Forget Password?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogInPage;
