import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function Admin_listRooms() {
     const listRooms = useSelector((state) => state.product);
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
          <th>Name BnB</th>
          <th>Category</th>
          <th>AddressBnb</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          listRooms.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.nameBnb}</td>
                <td>{item.category}</td>
                <td>{item.addressBnb}</td>
                <td>{item.price}</td>
                <td>
                <Button variant="outline-info"><box-icon name='info-square'></box-icon></Button>{' '}
                <Button variant="outline-warning"><box-icon name='edit'></box-icon></Button>{' '}
                <Button variant="outline-danger"><box-icon name='task-x'></box-icon></Button>{' '}
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

export default Admin_listRooms