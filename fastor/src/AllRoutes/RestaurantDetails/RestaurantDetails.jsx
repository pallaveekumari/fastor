import React, { useEffect, useState } from 'react';
import styles from "./RestaurantDetails.module.css"
import Card from '../../Components/Card/Card';

const RestaurantDetails = () => {
    const [data,setData] = useState();

    useEffect(()=>{
        let restaurantData = JSON.parse(localStorage.getItem('product'));
        setData(restaurantData);
    },[])
  return (
    <div>
      {data && <Card restaurant={data} />}
    </div>
  )
}

export default RestaurantDetails
