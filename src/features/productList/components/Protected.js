import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/AuthSlice'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
const user= useSelector(selectLoggedInUser)


  if(!user){
    return <Navigate to="/login" replace={true} />
  }
  return children
}

export default Protected