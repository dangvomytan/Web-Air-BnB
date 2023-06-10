import React, { useMemo, useState } from 'react'
import './Header.css'
import 'boxicons'
import { Collapse } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { logout } from '../../redux/reducer/UserSlice';
import { useDispatch } from 'react-redux';


function Header() {
     const [searchOpen, setSearchOpen] = useState(false);
     const [infoOpen, setInfoOpen] = useState(false);
     const [isActive, setIsActive] = useState(false);
     const dispatch =useDispatch();
     const navigate = useNavigate();

     const toggleSlider = () => {
          setInfoOpen(!infoOpen)
     };

     const [hasToken] = useState(localStorage.getItem("AccessToken"));
     const userLogin = useMemo(() => {
          if (hasToken) {
               setIsActive(!isActive);
               const getUser = JSON.parse(localStorage.getItem("Users"));
               return getUser;
          }
     }, [hasToken])

     const handleLogOut =() =>{
          setIsActive(false);
          dispatch(logout());
          setTimeout(() => {
               navigate("/auth/sign-in");
             }, 500);
     }
console.log(userLogin);
     return (
          <>
               <div className='header_body'>
                    <div className='header_content'>
                         <div className='header_logo'>
                         <Link to='/'> <h2>TanDang<span>BnB</span></h2></Link>
                         </div>
                         <div className='header_search' onClick={() => setSearchOpen(!searchOpen)}>
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
                              <div className={`item_0${isActive ? '-active' : ''}`} onClick={toggleSlider}>

                                   <div className="item_0-track">
                                        <div className="item_0-thumb">
                                             <div className={`item_1${isActive ? '-active' : ''}`}>
                                                  <box-icon type='solid' color={isActive ? 'var(--color-white)' : '#a4b0be'} size='ms' name='user-detail'></box-icon>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <Collapse in={searchOpen}>
                         <div>
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
                                             <box-icon size='md' color='var(--color-white)' name='search'></box-icon>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Collapse>
                    <div className='info_box'>
                         <Collapse in={infoOpen} dimension="width">
                              <div>
                                   <div className='info_Login'>

                                        {hasToken ? (<div className='item_0'>
                                             <div className='item_2'>
                                                  Hi, <b>{userLogin?userLogin.name:""}</b>
                                             </div>
                                             <hr />
                                             <div className='item_1'>
                                                  <span>Account</span>
                                             </div>
                                             <div className='item_1'>
                                                  <span>Trips</span>
                                             </div>
                                             <div className='item_1'>
                                                  <span>Wishlists</span>
                                             </div>
                                             <hr />

                                             <div className='item_1' onClick={handleLogOut}>
                                                  <span>Log out</span>
                                             </div>

                                        </div>) : (
                                             <Link className='item_1' to='auth/sign-in'>
                                                   <span>Log in</span>
                                             </Link>
                                        )
                                        }
                                   </div>
                              </div>
                         </Collapse>
                    </div>
               </div>
          </>
     )
}

export default Header

