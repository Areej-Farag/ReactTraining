import React, { Children } from "react";
import Button from "./Button";
import "./Styles/styles.css";
import img1 from "../photo1.png";

export default function sidebar() {
  const buttonInfo = [
    {
      id: 1,
      title: "Home",
      c: (
        <div>
          <p>Home</p>
          <img src={img1} alt="" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Profile",
      img: img1,
      c: (
        <div>
          <img src={img1} alt="" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Home",
      c: (
        <div>
          <p>Home</p>
        </div>
      ),
    },
  ];
  const buttonList = buttonInfo.map((button) => {
    return <Button title={button.title}>{button.c}</Button>;
  });

  return <div className="sidebar">{buttonList}</div>;
}
