import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    console.log({ firstName, lastName, email, phoneNumber, password });
    navigate("/");
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the isChecked state
  };
  return (
    <div>
      <div className=" rounded-lg mt-16 bg-teal-200 p-10 mx-auto space-y-5 max-w-[500px] text-center ">
        <h1 className="text-2xl font-bold">Register</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 mt-4 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 mt-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mt-4 w-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 mt-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mt-4 w-full"
        />
        <div className=" text-left ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="pl-4">Register as seller</label>
        </div>
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </div>
  );
};

export default Register;
