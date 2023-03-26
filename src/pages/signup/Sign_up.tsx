import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { update } from "../../../redux/slice";
import { auth } from "../../firebase/firebase";
import "./signup.css";

function Sign_up() {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [error, seterror] = useState<string>("");
  const formdata = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = form.current?.email.value;
    const password = form.current?.password.value;
    const username = form.current?.username.value;

    const updatedUserData = Object.assign({}, userData, {
      username: username,
      email: email,
    });

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");
        dispatch(update(updatedUserData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterror(errorMessage);
        // ..
      });
  };

  return (
    <div className="signup__form">
      <div className="signup__container">
        <form action="" onSubmit={formdata} ref={form}>
          <p>{error}</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter your email address"
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Sign_up;
