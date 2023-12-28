import React, { useContext, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './Context/UseContext'

const PrivateRoute = ({children}) => {

    const {show} = useContext(UserContext)
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        if(!show){
            navigate("/RegistrationForm")
        }
    },[])
  return (

    <div>
        {children}
    </div>
  )
}

export default PrivateRoute