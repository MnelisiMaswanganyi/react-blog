import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
      username: "",
      password: "",
    });
    const [err, setError] = useState(null);
  
    const navigate = useNavigate();
  
    const { login } = useContext(AuthContext);
  
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  