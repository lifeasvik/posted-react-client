import React from "react";
import TokenService from "../services/token-service";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar(props) {
  return (
    <nav className="navbarstyle">
      <ul>
        {!TokenService.getAuthToken() ? (
          <>
            <li>
              <Link to="/">
                <h4>login</h4>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <h4>signup</h4>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/postcard">Create</Link>
            </li>
            <li>
              <Link to="/viewpostcard">View</Link>
            </li>
            <li>
              <a
                href="/logout"
                onClick={(e) => {
                  e.preventDefault();
                  TokenService.clearAuthToken();
                  props.history.push("/");
                }}
              >
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
