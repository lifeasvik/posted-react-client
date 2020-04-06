import React from "react";
import TokenService from "../services/token-service";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        {!TokenService.getAuthToken() ? (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
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
