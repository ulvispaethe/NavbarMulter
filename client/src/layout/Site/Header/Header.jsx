import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.scss";
const Header = () => {
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/setting/").then((res) => {
      setLogo(res.data[0].image.name)
    });
  }, [logo]);
  const [num, setNum] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/setting/").then((res) => {
      setNum(res.data[0].num)
    });
  }, [num]);
  return (
    <div className="navbar">
      <div className="navbarleft">
        <img src={`http://localhost:8080/uploads/${logo}`} alt="#" />
      </div>
      <div className="navbarmid">
        <div>Call:{num}</div>
      </div>
      <div className="navbarright">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
