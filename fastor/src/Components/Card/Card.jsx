import React from "react";
import styles from "../Card/Card.module.css";
const Card = ({restaurant}) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.imgBox}>
        <img
          className={styles.cake}
          src={restaurant.images[0]['url']}
          alt=""
        />
      </div>
      <div>
        <h3>{restaurant.restaurant_name}</h3>
        {/* <p>{restaurant.location.location_address}</p> */}
        <p className={styles.four}>{restaurant.rating.restaurant_avg_rating} {" offers trending"}</p>
        <div className={styles.lowerBox} >
          <p>{restaurant.rating.restaurant_avg_rating} {" rating"}</p>
          <p>{restaurant.currency.symbol} {" "} {restaurant.avg_cost_for_two}</p>
        </div>
      </div>
    </div>
  );
};

/*
avg_cost_for_two
rating.restaurant_avg_rating
currency.symbol
location.location_address
images[0]['url']
restaurant_name
*/

export default Card;
