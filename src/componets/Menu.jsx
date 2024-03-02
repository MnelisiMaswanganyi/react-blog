import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);