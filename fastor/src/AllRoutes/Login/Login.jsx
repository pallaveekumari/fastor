import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  const handleProceed = async () => {
    let formData = new FormData();
    formData.append("phone", mobileNumber);
    formData.append("dial_code", "+91");
    try {
      let res = await fetch("https://staging.fastor.in/v1/pwa/user/register", {
        method: "POST",
        body: formData,
      });
      let data = await res.json();
      navigate("/otp");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.mainBox}>
        <div className={styles.container}>
          <p>Enter Your Mobile Number</p>
          <div className={styles.miniBox}>
            <p>We will send you the 4 digit verification code</p>
          </div>
          <input
            className={styles.inputName}
            type="number"
            placeholder="Enter Mobile Number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button className={styles.sendbtn} onClick={handleProceed}>
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
