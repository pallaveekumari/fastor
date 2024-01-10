import React, { useState } from "react";
import styles from "./Otp.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSubmitOtp = async () => {
    try {
      let mobNumber = localStorage.getItem("phone");
      let formData = new URLSearchParams();
      formData.append("phone", mobNumber);
      formData.append("otp", otp);
      formData.append("dial_code", "+91");
      let res = await fetch("https://staging.fastor.in/v1/pwa/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      let data = await     res.json();



      console.log(data);
      if (data.status_code == 200) {
        localStorage.setItem("token", data.data.token);
        alert("Login Success");
        navigate("/restaurant");
      } else {
        alert("Login Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.mainBox}>
        <div className={styles.container}>
          <p>OTP Verification</p>
          <div className={styles.miniBox}>
            <p>
              Enter the verification code we just sent on your Mobile Number.
            </p>
          </div>
          <input
            className={styles.inputName}
            type="number"
            placeholder="enter otp"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className={styles.sendbtn} onClick={handleSubmitOtp}>
            Verify Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
