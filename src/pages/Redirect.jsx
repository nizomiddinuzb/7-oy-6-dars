import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const auth=getAuth();
const Redirect = ({children}) => {
  const navigate=useNavigate()
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(!user){
          navigate('/login')
        }
      })
    })
  return (
    <>
    {children}
    </>
  )
}

export default Redirect