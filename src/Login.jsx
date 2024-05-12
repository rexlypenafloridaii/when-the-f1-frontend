import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1 className="text-center text-2xl">Welcome to When the F1</h1>
      <h1 className="text-center text-lg">Please Log In</h1>
      <div className="flex justify-center ">
        <ul className="text-red-600">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center ">
        <form onSubmit={handleSubmit}>
          <div>
            Email: <input className="border-2 rounded-full border-black" name="email" type="email" />
          </div>
          <div>
            Password: <input className="border-2 rounded-full border-black" name="password" type="password" />
          </div>
          <button className="border-2 px-2 py-2 bg-green-400" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        Don&apos;t have an account?{""}
        <Link className="nav-link text-blue-700" to="/signup">
          {" "}
          Sign up here.
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          className="f1.gif"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJpN3c3aGE1NDd4dzd2aDd3ZHpvN2gzb2xxNnZ1NTdhbXN1c3FoayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iJDLBX5GY8niCpZYkR/giphy.gif"
        />
      </div>
    </div>
  );
}
