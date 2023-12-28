import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",background:"white",height:"10vh",alignItems:"center",}}>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <h1 style={{cursor:"pointer"}}>
            KALVIUM
            <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="Kalvium" />
        </h1>
        </Link>
        <div style={{display:"flex",alignItems:"center",textDecoration:"none",   cursor:"pointer"}}>
            <Link to={"/contact"}>
            <h4>Contact</h4>
            </Link>
            <Link to={"/info"}>
            <h4 style={{margin:"0 20px"}}>Info</h4>
            </Link>
            <Link to={"/RegistrationForm"}>
            <h4 style={{margin:"0 20px"}}> Registration Form</h4>
            </Link>
        </div>
    </div>
  )
}

export default Navbar