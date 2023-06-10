import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Admin_listUser() {
     const listUser = useSelector((state) => state.user);
  return (
     <div className='item_0'>
     <div className='item_1'>
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
                 <tr>
                   <td>{index+1}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.status?'active':'lock'}</td>
                   <td>
                     <Button variant="outline-info">Info</Button>{' '}
                     <Button variant="outline-warning">Edit</Button>{' '}
                   </td>
                 </tr>
               )
             })
           }

         </tbody>
       </Table>
     </div>

   </div>
  )
}

export default Admin_listUser