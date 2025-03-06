import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./Styles/styles.css";

export default function Main() {
  return (
    <div className="main">
      <div className="posts">
        <Post title={"TARMEEZ ACADEMY"} body={"أكاديمية مخصصة لتعليم البرمجة"}>
          <h1>21</h1>
        </Post>
        <Post title={"HELLO WORLD"} body={"Hello World text"} />
        <Post title={"POST 3"} body={" this is post 3 text"} />
      </div>
      <div className="mainSideBar">
        <Sidebar />
      </div>
    </div>
  );
}
