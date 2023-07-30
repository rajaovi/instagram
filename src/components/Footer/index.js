import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosRes from "../../api/axiosRes";
import "./footer.scss";

const Footer = () => {
  const [countryList, upateCountyList] = useState([]);
  useEffect(() => {
    axiosRes(
      "https://restcountries.com/v3.1/all",
      (res) => {
        upateCountyList(res.data);
        console.log("Res", res.data);
      },
      (err) => {
        //error
        alert("Error With the API");
      }
    );
  }, []);

  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link>Meta</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
          <li>
            <Link>API</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Terms</Link>
          </li>
          <li>
            <Link>Top Accounts</Link>
          </li>
          <li>
            <Link>Locations</Link>
          </li>
          <li>
            <Link>Instagram Lite</Link>
          </li>
          <li>
            <Link>Threads</Link>
          </li>
          <li>
            <Link>Contact Uploading & Non-Users</Link>
          </li>
          <li>
            <Link>Meta Verified</Link>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <div className="langSelector">
          <select>
            {countryList.map((data, index) => {
              const languages = data.languages;
              return <option key={index}>{data.name.common}</option>;
            })}
          </select>
        </div>
        <div>
          <p>© 2023 Instagram from Meta</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
