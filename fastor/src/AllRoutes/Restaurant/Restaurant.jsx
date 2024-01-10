import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Restaurant.module.css";
const Restaurant = () => {
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.veggieBox}>
          <img
            className={styles.veggieBoximg}
            src="https://i0.wp.com/myveggietravels.com/wp-content/uploads/2020/05/vegan-restaurants-palolem.jpg?resize=1140%2C757&ssl=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
