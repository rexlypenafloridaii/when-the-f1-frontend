import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="text-center text-lg">Signup</h1>
      <div className="flex justify-center">
        <ul className="text-red-600">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input className="border-2 rounded-full border-black" name="name" type="text" />
          </div>
          <div>
            Email: <input className="border-2 rounded-full border-black" name="email" type="email" />
          </div>
          <div>
            Password: <input className="border-2 rounded-full border-black" name="password" type="password" />
          </div>
          <div>
            Password confirmation:{" "}
            <input className="border-2 rounded-full border-black" name="password_confirmation" type="password" />
          </div>
          <button className="border-2 px-2 py-2 bg-green-400" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
