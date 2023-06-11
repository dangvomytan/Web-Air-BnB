import React from 'react'

function Trip() {
  return (
     <div className='pay_body'>
     <div className='pay_content'>
          <div className='pay_content_title'>
               {/* <box-icon type='solid' name='chevron-left'></box-icon> */}
               {/* <span onClick={() => navigate(-1)}>Confirm and pay</span> */}
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
                                   {/* <div className='item_5'><input type="date" value={startDate} onChange={handleOnchangeStartDate} name="" id="" /></div> */}

                              </div>
                              <div className='item_3' >
                                   <div className='item_4'><b>End</b></div>
                                   {/* <div className='item_5'><input type="date" value={endDate} onChange={handleOnchangeEndDate} name="" id="" /></div> */}
                              </div>
                         </div>
                         {/* <div className='item_2'>
                              <b> Guest</b>
                         </div> */}
                         {/* <div className='item_2'>
                              <div className='item_3'>
                                   <div className='item_4'><b>Quantity</b></div>
                                   <div className='item_5'><input type="number" name="" id="" /></div>

                              </div>
                         </div> */}
                    </div>

                    <hr />
                    <div className='item_1'>
                         <h4><b>Pay with</b></h4>
                    </div>
                    <div className='item_2'>
                         {/* <Form.Select size="lg" name='method' onChange={handleOnchange}>
                              <option value={"Direct payment"}>Direct payment</option>
                              <option value={"Credit or debit card"}>Credit or debit card</option>
                         </Form.Select> */}
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
                         {/* <Form.Control type="text" placeholder="Email" name='email' value={user.email} readOnly /> */}
                    </div>
                    <div className='item_2'>
                         {/* <Form.Control type="text" placeholder="Address" name='addressUser' onChange={handleOnchange} /> */}
                    </div>
                    <div className='item_2'>
                         {/* <Form.Control type="number" placeholder="phone" name='phone' onChange={handleOnchange} /> */}
                    </div>
                    <hr />
                    <div>
                         {/* <Button variant="secondary" onClick={() => handleOnclick()}>Confirm pay</Button>{' '} */}
                    </div>
               </div>
               <div className='pay_detail'>
                    <div className='info_room'>
                         <div className='item_10'>
                              {/* <img src={location.state.images[0]} alt="" /> */}
                         </div >
                         <div className='item_11'>
                              {/* {location.state.nameBnb} */}
                         </div>
                         <div className='item_11'>

                         </div>
                         <hr />
                         <div className='item_12'>
                              <div>
                                   {/* <span>$ {location.state.price} x {rentalDuration} nights</span> */}
                              </div>
                              {/* <div><span>$ {total < location.state.price ? location.state.price : total}</span></div> */}
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
                              {/* <div><span>$ {total + 5}</span></div> */}
                         </div>
                    </div>
               </div>
          </div>
     </div>
</div>
  )
}

export default Trip