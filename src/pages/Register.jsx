import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
    });
    const [err, setError] = useState(null);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
