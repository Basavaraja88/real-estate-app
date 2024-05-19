import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the isChecked state
  };
  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError("Enter Valid email");
      return;
    }
    if (!password) {
      setPasswordError("Enter Currect Password");
      return;
    }
    navigate(isChecked ? "/seller-dashboard" : "/buyer-dashboard");
  };
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (value: string, name: string) => {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="p-4  h-screen  ">
      {/* <img
        src={"../../public/assets/Real-Estate-main-bg.jpg"}
        alt="property"
        className="w-full h-32 object-cover mt-2"
      /> */}

      <div className="">
        <form className="bg-orange-200 p-10 rounded-lg shadow-lg mx-auto max-w-[400px] space-y-7 text-center">
          <p className=" text-[20px] font-bold ">LogIn</p>
          <div>
            <input
              className="border p-2 mt-4 w-full"
              type="email"
              value={email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div>
            <input
              className="border p-2 mt-4 w-full"
              type="password"
              value={password}
              onChange={(e) => handleChange(e.target.value, "password")}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <div className=" text-left ">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="pl-4">Login as seller</label>
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
