import React from 'react'
import { Button, Col, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function MyVerticallyCenteredModal(props) {
  const updateRooms =  props.viewRooms
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Rooms
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2">
                id
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2">
                Name rooms
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"  placeholder="Name rooms" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2">
              Address
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Address" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2">
              Category
              </Form.Label>
              <Col sm="10">
              <Form.Select aria-label="Default select example">
              <option value="{updateRooms.category}"></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
    </Form.Select>
              </Col>
            </Form.Group>            
          <Form.Group as={Row} className="mb-3" >
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
              <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)"  />
        {/* <InputGroup.Text>.00</InputGroup.Text> */}
      </InputGroup>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Admin_listRooms() {
  const listRooms = useSelector((state) => state.product);
  const [modalShow, setModalShow] = React.useState(false);
  const [viewRooms,setViewRooms] = React.useState();

const handleClickEdit = (item) =>
{
  setModalShow(true)
  setViewRooms({...item})
}




  return (
    <div className='content_user'>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        viewRooms={viewRooms}

      />
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
                  <td>{index + 1}</td>
                  <td>{item.nameBnb}</td>
                  <td>{item.category}</td>
                  <td>{item.addressBnb}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button variant="outline-info"><box-icon name='info-square'></box-icon></Button>{' '}
                    <Button variant="outline-warning" onClick={() => handleClickEdit(item)}><box-icon name='edit'></box-icon></Button>{' '}
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