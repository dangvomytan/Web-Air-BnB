import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Admin() {
  const [hasToken] = useState(localStorage.getItem("AccessToken"))
  const isAdmin = JSON.parse(localStorage.getItem("Users"))
  return(
      (hasToken && hasToken !== "" && hasToken !== null && isAdmin.email =="admin@gmail.com") ? <Outlet/> : <Navigate to="/" />
  )
}

export default Admin