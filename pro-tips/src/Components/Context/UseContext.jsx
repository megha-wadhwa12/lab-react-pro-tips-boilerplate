import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UseContext = ({children}) => {
    
    const [show,setShow] = useState(false)
    console.log(show);

  return (
    <UserContext.Provider value={{show,setShow}}>
        {children}
    </UserContext.Provider>
  )
}

export default UseContext