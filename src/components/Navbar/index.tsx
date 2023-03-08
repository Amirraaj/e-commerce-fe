import { Button, message, notification } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/General/userIcon.png";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { getUserProfile } from "../../api/Customer/index";
import "./style.css";
import axios from "axios";
import { CartState } from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { UInterface } from "../../Redux/userSlice";
import { addUser } from "../../Redux/userSlice";


const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
interface IUser {
  eamil: String;
  firstName: String;
  lastName: String;
  password: String;
  phone: Number;
  userName: String;
  createdAt: String;
  _id: String;
}
type INav = {
  setShowCart: () => void;
};
function Navbar({ setShowCart, showCart }: any) {
  const [navToggler, setNavToggler] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [item, setItem] = useState("");
  const [user, setUser] = useState("");
  const cart = useSelector((state: CartState) => state.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage?.getItem("token");
    const data = async (token: string) => {
      return await axios.get(URL + "user/getUserByID", {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
    if (token) {
      data(token)
        .then((d) => {
          const userDetails = {
            firstName: d.data.data.firstName,
            lastName: d.data.data.lastName,
            userName: d.data.data.userName,
            phone: d.data.data.phone,
            email: d.data.data.email,
          };
          dispatch(addUser(userDetails))
          console.log(userDetails, "this is data");
          setUser(d.data.data.userName);
        })
        .catch((e) => console.log(e));
    }
  }, [localStorage?.getItem("token"), user]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 400;
    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.9;

      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      message.info("  This is Profile");
    }
    if (key === "2") {
      localStorage.removeItem("token");
      setItem("");
      notification.success({ message: "Log out Sucessfull" });
      setUser("");
      navigate("/");
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      icon: <i className="fa-solid fa-user text-primary"></i>,
    },
    {
      key: "2",
      label: "Log Out",
      icon: (
        <i className="fa-solid fa-arrow-right-from-bracket text-primary"></i>
      ),
    },
  ];
  const newUser = useSelector((state: UInterface) => state.user);
  console.log(newUser,"this is user")

  return (
    <nav
      className="navbar"
      style={
        !navToggler
          ? {
              boxShadow: `rgb(32 45 74 / ${boxShadow}) 0px 0px 10px `,
            }
          : {}
      }
    >
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler">
            <Link to="/" className="navbar-band" style={{ zIndex: 9 }}>
              ENepal
            </Link>
            <button
              className="navbar-open-btn "
              style={{ zIndex: 9 }}
              onClick={() => setNavToggler(!navToggler)}
            >
              <span className="line" />
              <span
                className="line"
                style={{
                  width: navToggler ? "40%" : "70%",
                }}
              />
              <span className="line" />
            </button>
            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <ul className="navbar-nav">
                <Link to="/" className="nav-link">
                  <li className="nav-item">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="nav-item">About Us</li>
                </Link>
                <Link to="/" className="nav-link">
                  <li className="nav-item">what's new</li>
                </Link>
                <Link to="/allproducts" className="nav-link">
                  <li className="nav-item">Products</li>
                </Link>
              </ul>

              {!user ? (
                <div className="flex justify-center items-center gap-5">
                  <Link to="/login">
                    <Button size="large">Log In</Button>
                  </Link>
                  <Link to="/register">
                    <Button size="large" type="primary">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-5">
                  <i
                    className="fa-solid fa-cart-shopping text-[22px] text-primary hover:text-secondary cursor-pointer relative"
                    onClick={() => setShowCart(true)}
                  >
                    {cart.length > 0 && (
                      <div className="absolute w-[15px] h-[15px] bg-[red] rounded-full top-[-10px] right-[-10px] text-light text-[10px] flex justify-center items-center">
                        {cart?.length}
                      </div>
                    )}
                  </i>
                  <Dropdown menu={{ items, onClick }}>
                    <Space>
                      <div className="flex justify-center items-center gap-7">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <img
                            src={userImage}
                            alt=""
                            className="rounded-full w-[30px]"
                          />
                          <h1 className="text-xl text-primary font-medium ">
                            {user}
                          </h1>
                          <i className="fa-solid fa-caret-down text-primary "></i>
                        </div>
                      </div>
                    </Space>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
