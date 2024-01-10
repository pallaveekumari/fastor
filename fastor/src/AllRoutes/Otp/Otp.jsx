import React, { useState } from "react";
import styles from "./Otp.module.css";
import Navbar from "../../Components/Navbar/Navbar";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const handleSubmitOtp = async () => {
    try {
      let formData = new FormData();
      formData.append("otp", otp);
      formData.append("dial_code", "+91");
      let res = await fetch("https://staging.fastor.in/v1/pwa/user/login", {
        method: "POST",
        body: formData,
      });
      let data = await res.json();
      console.log(data);
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
