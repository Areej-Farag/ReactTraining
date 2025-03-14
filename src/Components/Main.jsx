import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./Styles/styles.css";

export default function Main() {
  const posts = [
    { id: 1, title: "POST 1", body: "this is post 1 text" },
    { id: 2, title: "POST 2", body: "this is post 2 text" }, 
    { id: 3, title: "POST 3", body: "this is post 3 text" },
    { id: 4, title: "POST 4", body: "this is post 4 text" } 
  ];
  const postList = posts.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ))
  return (
    <div className="main">
      <div className="posts">
        {postList}
      </div>
      <div className="mainSideBar">
        <Sidebar />
      </div>
    </div>
  );
}
