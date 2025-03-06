import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import'./Styles/styles.css'

export default function Main() {
  return (
    <div className="main">
      <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div  className='mainSideBar'>
        <Sidebar />
      </div>
    </div>
  );
}
