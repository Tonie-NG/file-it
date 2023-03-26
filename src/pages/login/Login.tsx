import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../../redux/slice";
import { auth } from "../../firebase/firebase";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [error, seterror] = useState<string>("");
  const formdata = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = form.current?.email.value;
    const password = form.current?.password.value;
    const updatedUserData = Object.assign({}, userData, {
      login: true,
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
        dispatch(update(updatedUserData));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage);
      });
  };

  return (
    <div className="login__form">
      <div className="login__container">
        <form action="" onSubmit={formdata} ref={form}>
          <p>{error}</p>
          <input
            type="email"
            name="email"
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

export default Login;
