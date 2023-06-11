import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateReserves } from '../../../../redux/reducer/ReserveSlice';

function Admin_listReserve() {
  const listReserve = useSelector((state) => state.reserve);
  const dispatch = useDispatch();
  // console.log(listReserve);

const handleOclickCheckin =(item) =>{
console.log(item);
item.status ?(item = {...item}):(item = {...item,status:true})
console.log(item);
const updateReserve = async () =>{
  await dispatch(updateReserves(item)).unwrap();
} 
updateReserve();
}

  return (
    <div className='content_user'>
    <div className='item_1'>
    <div className='item_2'>
      <h2>Manage rooms</h2>
    </div>
    <div className='item_3'>

    </div>
    </div>
   <Table striped bordered hover size="sm">
     <thead>
       <tr>
         <th>#</th>
         <th>Email</th>
         <th>Name BnB</th>
         <th>AddressBnb</th>
         <th>Start Date</th>
         <th>End Date</th>
         <th>Total</th>
         <th>Status</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {
         listReserve.map((item, index) => {
           return (
             <tr key={item.id}>
               <td>{index+1}</td>
               <td>{item.email}</td>
               <td>{item.nameBnb}</td>
               <td>{item.addressBnb}</td>
               <td>{item.startDate}</td>
               <td>{item.endDate}</td>
               <td>{item.total}</td>
               <td>{item.status?<box-icon color='#6ab04c' size='md' name='calendar-check'></box-icon>:<box-icon color='#f9ca24' size='md' name='calendar-x' ></box-icon>}</td>
               <td>
               <Button variant="outline-info"><box-icon name='info-square'></box-icon></Button>{' '}
               <Button onClick={()=>handleOclickCheckin(item)} variant={item.status?'success':'outline-success'}><box-icon name='task'></box-icon></Button>{' '}
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

export default Admin_listReserve