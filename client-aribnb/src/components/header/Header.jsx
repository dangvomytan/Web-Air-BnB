// 
import logo from '../../assets/images/logo/logo.png'
import React from 'react'
// import './Header.css'
import 'boxicons'


function Header() {
  return (
    <>
     <div className='inner_nav'>
          <div className='logo'>
               <img src={logo} alt=""/>
               </div>
          <div className='middle'>
               <div className='card'>
               <div>Any where</div>
               <div>Any week</div>
               <div>Add gueste</div>
               </div>

               <div className='prame_2'>
               <box-icon name='search'></box-icon>
               </div>
          </div>
          <div className='right_part'>
                    <div className='middle_user'>
                         <div>
                         <box-icon type='solid' color='#95afc0' size="lg" name='user-circle'></box-icon>
                         
                         </div>
                         <div><box-icon color='#95afc0' size="lg" name='menu'></box-icon></div>
                    </div>
               </div>
     </div>
     <div className='inner_nav-2'>
         <div className='middle-2 '>
               <div className='card-2'>
                    <p> Any where</p>
                   <input type='text' placeholder='Search ... ' />
                    </div>
               <div className='card-3'>
                    <p>start</p>
                    <input type='date' />
                    </div>
               <div className='card-3'>
                    <p>end</p>
                    <input type='date' />
                    </div>
               <div className='card-4'>
                    <div>
                         <p> Add gueste</p>
                         <span>add gueste</span>
                    </div>
                   <div className='card-btn'>
                    <button>Search</button>
                   </div>
                    </div>
         </div>
     </div>
    </>
  )
}

export default Header