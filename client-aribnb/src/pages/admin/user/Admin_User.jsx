import { useState } from 'react';
import './Admin_User.css'
import {Collapse } from 'react-bootstrap';
import Admin_listUser from '../../../components/admin/manageUser/listUser/Admin_listUser';
import Navbar from '../navbar/Navbar';

function Admin_User() {
     const [open, setOpen] = useState(false);
     return (
          <div className='admin_html'>
               <div className='admin_body'>
                    <div className='admin_header'>
                         <div className='item_1'>
                              <button onClick={() => setOpen(!open)}><box-icon name='menu-alt-left' size='md' color='var( --color-admin-icon-menu)'></box-icon></button>
                         </div>
                    </div>
                    <div className='admin_main'>
                         <Collapse in={open} dimension="width">
                              <div className='admin_nav'>
                              {/* ======================= */}
                              <Navbar/>
                              {/* ======================= */}
                              </div>
                         </Collapse>
                         <div className='admin_content'>
                              {/* ======================= */}
                               <Admin_listUser/>
                              {/* ======================= */}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Admin_User