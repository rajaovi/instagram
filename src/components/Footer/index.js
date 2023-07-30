import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
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
            <option>English</option>
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
