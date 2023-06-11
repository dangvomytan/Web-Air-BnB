import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
     <>
     <NavLink to={'/admin/manage-user'} className='item_1'>
          <div className='item_2'>
          <box-icon type='solid' size='md' color='var(--color-admin-icon-nav)' name='user-account'></box-icon>
          </div>
          <div className='item_3'>
               User
          </div>
     </NavLink>

     <NavLink  to={'/admin/manage-rooms'} className='item_1'>
          <div className='item_2'>
          <box-icon type='solid' name='institution' size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
              Rooms
          </div>
     </NavLink>

     <NavLink  to={'/admin/manage-reserve'} className='item_1'>
          <div className='item_2'>
          <box-icon name='task'size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
               Reserve
          </div>
     </NavLink>

     
</>
  )
}

export default Navbar