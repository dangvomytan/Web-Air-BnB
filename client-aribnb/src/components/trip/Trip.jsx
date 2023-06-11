import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Trip() {
  const listReserve = useSelector((state) => state.reserve)??[];
  const loginUser = JSON.parse(localStorage.getItem("Users"))

  return (
    <div className='pay_body'>
      <div className='pay_content'>
        <div className='pay_content_title'>
          <box-icon type='csolid' name='chevron-left'></box-icon>
          <span>Your trips</span>
        </div>
        <hr />
        <div>
          <div className='item_1'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name Bnb</th>
                  <th>Address</th>
                  <th>Current Date</th>
                  <th>Total</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  listReserve.map((item, index) => {
                    if(item.email == loginUser.email)
                    {
                      console.log(listReserve);
                                         return (
                      <tr key={item.id}>
                        <td>{item.nameBnb}</td>
                        <td>{item.addressBnb}</td>
                        <td>{item.currentDate}</td>
                        <td>{item.total}</td>
                        <td>
                        <Button variant={item.status?'success':'secondary'}>{item.status?(<box-icon name='task'></box-icon>):(<box-icon name='clipboard'></box-icon>)}</Button>
                        </td>
                        <td>
                        <Button variant="outline-info"><box-icon name='info-square'></box-icon></Button>
                        </td>
                      </tr>
                    )
                    }
 
                  })
                }

              </tbody>
            </Table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Trip