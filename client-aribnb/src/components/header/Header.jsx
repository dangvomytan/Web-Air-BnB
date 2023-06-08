// 
import logo from '../../assets/images/logo/logo.png'
import React, { useState } from 'react'
import './Header.css'
import 'boxicons'
import { Collapse } from 'react-bootstrap';


function Header() {
     const [open, setOpen] = useState(false);
     return (
          <>
               <div className='header_body'>
                    <div className='header_content'>
                         <div className='header_logo'>
                              <h2>TanDang<span>BnB</span></h2>
                         </div>
                         <div className='header_search' onClick={() => setOpen(!open)}>
                              <div className='seach_button'>
                                   <div className='item_1'>
                                        <div className='item_2'>
                                             Any Where
                                        </div>
                                        <div className='item_2'>
                                             Any Week
                                        </div>
                                        <div className='item_2'>
                                             Add guests
                                        </div>
                                   </div>
                                   <div className='item_0' >
                                        search
                                   </div>
                              </div>
                         </div>
                         <div className='header_infoUser'>
                              <div className='item_0'>
                                   <div className='item_1'>
                                        <box-icon type='solid' color='var(--color-border)' size='md' name='user-detail'></box-icon>
                                   </div>
                                   <div className='item_2'>
                                        {/* <box-icon name='menu' ></box-icon> */}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <Collapse in={open}>
                         <div id="example-collapse-text">
                              <div className='search_hiden'>
                                   <div className='item_0'>
                                        <div className='item_11'>
                                             <div className='item_12'>
                                                  <label htmlFor="">Where</label>
                                                  <input className='item' type="text" name="" id="" placeholder='Search ...' />
                                             </div>
                                             <div className='item_12'>
                                                  <label htmlFor="">Start</label>
                                                  <input className='item item_32' type="date" name="" id="" />
                                             </div>
                                             <div className='item_12'>
                                                  <label htmlFor="">End</label>
                                                  <input className='item item_32' type="date" name="" id="" />
                                             </div>
                                             <div className='item_12'>
                                                  <label htmlFor="">Guests</label>
                                                  <input className='item item_31' type="number" name="" id="" min={1} /></div>
                                        </div>
                                        <div className='item_21'>
                                        <box-icon size='md'color='var(--color-white)' name='search'></box-icon>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Collapse>
               </div>
          </>
     )
}

export default Header