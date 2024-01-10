import React from 'react'
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <img onClick={() => {
        navigate("/")
      }
      } className={styles.logo} src="https://fastor.com/sites/fastor/files/logo.jpg" alt="" />

      <div onClick={() => {
        navigate("/")
      }
      } className={styles.eachText}>Login</div>
      <div onClick={() => {
        navigate("/otp")
      }
      } className={styles.eachText}>Otp</div>
      <div onClick={() => {
        navigate("/restaurant")
      }
      }  className={styles.eachText}>Restaurant</div>
    </div>
  )
}

export default Navbar