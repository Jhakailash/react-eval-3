import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {navigate} from "react-router-dom";
import {
  browserRouter as router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import axios from "axios";

const Login = () => {
  
  const [isAuth,setIsAuth,ToggleAuth]=useContext(AuthContext);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleSubmit=(val)=>{
    val.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data:{
        email,
        password
      }
    })
    .then((res) => {
      alert("success");
      ToggleAuth()
    })
    .catch((err)=>{

    });
  };
  return (
    <div>
      <input data-cy="login-email" placeholder="email" type="text"  />
      <input data-cy="login-password" placeholder="password" type="password" />
      <button data-cy="login-submit" onclick={handleSubmit}></button>
    </div>
  );
};

export default Login;
