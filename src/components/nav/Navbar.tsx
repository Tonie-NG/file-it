import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState<boolean>(false);
  const loggedIn = useSelector((state: any) => state.user.login);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
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
          {!loggedIn ? (
            <ul className="nav__links">
              <Link to="/login" className="link">
                Sign-in
              </Link>
              <Link to="/sign-up" className="link nav__button">
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
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
