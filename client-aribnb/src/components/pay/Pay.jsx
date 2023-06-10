import React, { useEffect, useMemo, useState } from 'react'
import './Pay.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addReserve } from '../../redux/reducer/ReserveSlice';

function Pay() {
     const location = useLocation();
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [total, setTotal] = useState(0)
     const [valueInput,setValueInput] = useState([]);
     const navigate = useNavigate();
     const dispatch = useDispatch();


     // Lấy ngày hiện tại
     const currentDate = moment().format('YYYY-MM-DD');

     const rentalDuration = useMemo(() => {
          if (endDate && startDate) {
               const duration = moment(endDate).diff(moment(startDate), 'days');
               return duration;
          }
     }, [endDate, startDate]);
     useEffect(() => {
          setEndDate(location.state.endDate)
          setStartDate(location.state.startDate)
     }, [location.state.endDate, location.state.startDate]);


     const handleOnchangeStartDate = (e) => {
          const formattedDate = moment(e.target.value).format('YYYY-MM-DD');
          if (formattedDate <= endDate || !endDate) {
               setStartDate(formattedDate);
          } else {
               toastError();
          }
     };

     const handleOnchangeEndDate = (e) => {
          const formattedDate = moment(e.target.value).format('YYYY-MM-DD');
          if (formattedDate >= startDate) {
               setEndDate(formattedDate);
          } else {
               toastError();
          }
     };
     useEffect(() => {
          if (rentalDuration) {
               const total = Number(location.state.price) * Number(rentalDuration)
               setTotal(total)
          }
     }, [rentalDuration])


     const toastError = () => {
          toast.error('Please check your booking information!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
          });
     }
     const handleOnchange = (e) => {
          setValueInput({...valueInput,[e.target.name]:e.target.value})
     }
     const handleOnclick = () =>{
         dispatch(addReserve(valueInput)).unwrap();
     }

     return (
          <>
               <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
               {/* Same as */}
               <ToastContainer />
               <div className='pay_body'>
                    <div className='pay_content'>
                         <div className='pay_content_title'>
                              <box-icon type='solid' name='chevron-left'></box-icon>
                              <span onClick={()=>navigate(-1)}>Confirm and pay</span>
                         </div>
                         <hr />
                         <div className='confirm_content'>
                              <div className='content_confirm_pay'>
                                   <div className='item_1'>
                                        <h4> <b>Your trip</b></h4>
                                        <div className='item_2'>
                                             <b> Dates</b>
                                        </div>
                                        <div className='item_2'>
                                             <div className='item_3'>
                                                  <div className='item_4'><b>Start</b></div>
                                                  <div className='item_5'><input type="date" value={startDate} onChange={handleOnchangeStartDate} name="" id="" /></div>

                                             </div>
                                             <div className='item_3' >
                                                  <div className='item_4'><b>End</b></div>
                                                  <div className='item_5'><input type="date" value={endDate} onChange={handleOnchangeEndDate} name="" id="" /></div>
                                             </div>
                                        </div>
                                        <div className='item_2'>
                                             <b> Guest</b>
                                        </div>
                                        <div className='item_2'>
                                             <div className='item_3'>
                                                  <div className='item_4'><b>Quantity</b></div>
                                                  <div className='item_5'><input type="number" name="" id="" /></div>

                                             </div>
                                        </div>
                                   </div>

                                   <hr />
                                   <div className='item_1'>
                                        <h4><b>Pay with</b></h4>
                                   </div>
                                   <div className='item_2'>
                                        <Form.Select size="lg" name='method' onChange={handleOnchange}>
                                             <option value={"Direct payment"}>Direct payment</option>
                                             <option value={"Credit or debit card"}>Credit or debit card</option>
                                        </Form.Select>
                                        {/* <div className='item_7'>
                                             <Form.Control size="lg" type="text" placeholder="Card number" />
                                        </div>
                                        <div className='item_6'>
                                             <div className='item_7'>
                                                  <Form.Control size="lg" type="text" placeholder="Expiration" />
                                             </div>
                                             <div className='item_7'>
                                                  <Form.Control size="lg" type="text" placeholder="CVV" />
                                             </div>
                                        </div> */}
                                   </div>

                                   <hr />
                                   <div className='item_1'>
                                        <h4><b>Your info</b></h4>
                                   </div>
                                   <div className='item_2'>
                                        <Form.Control type="text" placeholder="Your name" name='userName' onChange={handleOnchange}/>
                                   </div>
                                   <div className='item_2'>
                                        <Form.Control type="text" placeholder="Address"  name='addressUser'  onChange={handleOnchange}/>
                                   </div>
                                   <div className='item_2'>
                                        <Form.Control type="text" placeholder="phone" name='phone' onChange={handleOnchange}/>
                                   </div>
                                   <hr />
                                   <div>
                                        <Button variant="secondary" onClick={()=>handleOnclick()}>Secondary</Button>{' '}
                                   </div>
                              </div>
                              <div className='pay_detail'>
                                   <div className='info_room'>
                                        <div className='item_10'>
                                            <img src={location.state.images[0]} alt="" />
                                        </div >
                                        <div className='item_11'>
                                            {location.state.nameBnb}
                                        </div>
                                        <div className='item_11'>

                                        </div>
                                        <hr />
                                        <div className='item_12'>
                                             <div>
                                                  <span>$ {location.state.price} x {rentalDuration} nights</span>
                                             </div>
                                             <div><span>$ {total < location.state.price ? location.state.price : total}</span></div>
                                        </div>
                                        <div className='item_12'>
                                             <div>
                                                  <span>Cleaning fee</span>
                                             </div>
                                             <div><span>$ 5</span></div>
                                        </div>
                                        <hr />
                                        <div className='item_12'>
                                             <div>
                                                  <div><span>Total</span></div>
                                             </div>
                                             <div><span>$ {total+5}</span></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Pay