import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Admin_listUser.css'
import { updateUsers } from '../../../../redux/reducer/UserSlice';

function Admin_listUser() {
     const listUser = useSelector((state) => state.user);
     const dispatch = useDispatch();
     

  const handleOnclickActive = (item) => {
   item.status ?(item = {...item,status:false}):(item = {...item,status:true})
    const updateUser = async () =>{
      await dispatch(updateUsers(item)).unwrap();
    } 
    updateUser();
  }

  return (
      <div className='content_user'>
        <div className='item_1'>
        <div className='item_2'>
          <h2>Manage user</h2>
        </div>
        <div className='item_3'>

        </div>
        </div>
       <Table striped bordered hover size="sm">
         <thead>
           <tr>
             <th>#</th>
             <th>User name</th>
             <th>Email</th>
             <th>Status</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           {
             listUser.map((item, index) => {
               return (
                 <tr key={item.id}>
                   <td>{index+1}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.status?'active':'Inactive'}</td>
                   <td>
                     <Button 
                     variant={item.status?"outline-danger":"outline-success"}
                     onClick={()=>handleOnclickActive(item)}
                     >{item.status?(<box-icon name='lock-alt'></box-icon>):(<box-icon name='lock-open-alt' ></box-icon>)}
                     </Button>
                   </td>
                 </tr>
               )
             })
           }
         </tbody>
       </Table> 
      </div>

  )
}

export default Admin_listUser