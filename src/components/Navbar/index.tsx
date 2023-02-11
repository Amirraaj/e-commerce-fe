import { Button, message, notification } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/General/userIcon.png";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { getUserProfile } from "../../api/Customer/index";
import "./style.css";
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

function Navbar() {
  const [navToggler, setNavToggler] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [item, setItem] = useState("");
  // const [user, setUser] = useState<IUser[]>()
  const [user, setUser] = useState("")

  useEffect(() => {
    const hasToken = localStorage.getItem("token");
    if (hasToken) {
      const token = JSON.parse(localStorage.getItem("token") || "");
      if (token) {
        setItem(token);
      }else{
        setItem("");
      }
    }else{
      console.log("notoken")
    } 
  }, []);


  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const profile = await getUserProfile(item);
    console.log(profile.data.data.userName, "sssss");
    setUser(profile?.data?.data?.userName);
  };

  // console.log(user?.userName,"666666666666666666666")


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
      localStorage.clear();
      setItem("");
      notification.success({message:"Log out Sucessfull"})
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
                <Link to="/" className="nav-link">
                  <li className="nav-item">About Us</li>
                </Link>
                <Link to="/" className="nav-link">
                  <li className="nav-item">what's new</li>
                </Link>
                <Link to="/" className="nav-link">
                  <li className="nav-item">Products</li>
                </Link>
              </ul>

              {!item ? (
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
                <Dropdown menu={{ items, onClick }}>
                  <Space>
                    <div className="flex justify-center items-center gap-7">
                      <i className="fa-solid fa-cart-shopping text-[22px] text-primary hover:text-secondary cursor-pointer"></i>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
