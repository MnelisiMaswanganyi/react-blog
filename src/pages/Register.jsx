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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/auth/register", inputs);
          navigate("/login");
        } catch (err) {
          setError(err.response.data);
        }
      };
    
