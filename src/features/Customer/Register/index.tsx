import { Alert, Button } from "antd";
import registerImage from "../../../assets/Clothes/register.jpg"
import { Link } from "react-router-dom";

function RegisterPage() {
  function abc(){
  }
  return (
    <section className="flex justify-center items-center p-10 md:p-20 bg-secondary">
      <div className="flex rounded-3xl overflow-hidden"
       style={{ boxShadow: "9px 13px 34px -13px rgba(110,82,199,0.75)" }}
        >
        <div className="max-w-lg min-w-[20rem] hidden sm:block">
            <img src={registerImage} alt="" className="object-cover h-full" />
        </div>
        <div className="login-form bg-light p-5 md:p-[2rem]  w-[29rem] ">
          <div className="flex justify-center">
          <h1 className="text-primary px-2 py-3 font-semibold text-4xl md:text-5xl  text-center font-secondary">
            Welcome
          </h1>
          </div>

         <h1 className="text-3xl text-primary my-10">Create Account</h1>
          <form>
            <div>
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="User Name"
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="email"
                placeholder="Email"
              />
              </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
            <Button type="primary" size="large" className="!px-10 !pb-11  !rounded-full !text-2xl " onClick={()=>abc()}>Register</Button>
            </div>
          </form>
          
          <div className="mt-8 flex justify-center items-center">
          <Link to="/login"> <span className="text-center text-sm text-primary cursor-pointer opacity-90 hover:opacity-100">Have Account?</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
