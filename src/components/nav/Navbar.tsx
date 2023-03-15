import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState<boolean>(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const user = {
    login: false,
  };
  return (
    <nav className={active ? "nav active" : "nav"}>
      <div className="nav__container">
        <div className="nav__logo">
          <img
            src="https://cdn.simpleicons.org/wpexplorer"
            alt="Logo"
            height={50}
            width={50}
          />
          <span className="nav__logo-text">File it</span>
        </div>
        <div className="nav__links-container">
          {!user.login ? (
            <ul className="nav__links">
              <Link to="" className="link">
                Sign-in
              </Link>
              <Link to="" className="link nav__button">
                Sign-up
              </Link>
            </ul>
          ) : (
            <ul className="nav__links">
              <Link to="" className="link">
                Create
              </Link>
              <Link to="" className="link">
                Upload
              </Link>
              <Link to="" className="link ">
                Files
              </Link>
              <Link to="" className="link ">
                Logout
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
