import React,{ useState,useEffect } from "react";
import { message } from "antd";
import "./App.less";
import Test from "./components/test";
import Router from "./pages/router";

function App() {

  useEffect(()=>{
  console.log("123");
  fetch('http://127.0.0.1:8000/api/api')
  .then(res =>{
    console.log(res)
    
})

})

  // return(
  //   <div>nothing</div>
  // );
  return <Router />;
}

export default App;