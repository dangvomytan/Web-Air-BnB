import React from 'react'
import './Footer-Sign.css'
import 'boxicons'

function FooterSign() {
  return (
    <div className='footer_box '>
     <div className='footer_nav_text'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Product</a>
          <a href='#'>Blog</a>
          <a href='#'>pricing</a>
     </div>
     <div className='footer_nav_icon'>
          <div><box-icon type='logo' color="var(--color-text)" size="md" name='facebook-square'></box-icon></div>
          <div><box-icon type='logo' color="var(--color-text)" size="md" name='twitter'></box-icon></div>
          <div><box-icon type='logo' color="var(--color-text)" size="md" name='instagram-alt'></box-icon></div>
          <div><box-icon type='logo' color="var(--color-text)" size="md" name='pinterest'></box-icon></div>
          <div><box-icon type='logo' color="var(--color-text)" size="md" name='linkedin-square'></box-icon></div>
     
     </div>

     </div>
  )
}

export default FooterSign