import './Detail.css'
import Header from '../header/Header'
import { useEffect, useMemo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

function Detail() {
     const [key, setKey] = useState('home');
     const location = useLocation();
     const navigate = useNavigate();
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [total, setTotal] = useState(0)


     // Lấy ngày hiện tại
     const currentDate = moment().format('YYYY-MM-DD');

     const rentalDuration = useMemo(() => {
          if (endDate && startDate) {
               const duration = moment(endDate).diff(moment(startDate), 'days');
               return duration;
          }
     }, [endDate, startDate]);


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

     const handleClickReseve = () =>{
          if(endDate && startDate)
          {
               const bookingData = {...location.state,startDate:startDate,endDate:endDate};
               navigate("/stays/comfirm-pay",{state:{...bookingData}});
          }
          else
          {
               toastError();
          }
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
               <div className='detail_body'>
                    <div className='dp_container'>
                         <div className='dp_title'>
                              <div>
                                   <h3>{location.state.nameBnb}</h3>
                              </div>
                              <div>

                                   <san>{location.state.reviews}</san> <span>reviews</span>{' - '}
                                   <span>{location.state.addressBnb}</span>
                              </div>
                         </div>
                         <div className='detail-image'>
                              <div className="gallery">
                                   <figure className="gallery__item gallery__item--1">
                                        <img src={location.state.images[0]} alt="" />
                                   </figure>
                                   <figure className="gallery__item gallery__item--2">
                                        <img src={location.state.images[1]} alt="" />
                                   </figure>
                                   <figure className="gallery__item gallery__item--3">
                                        <img src={location.state.images[2]} alt="" />
                                   </figure>
                                   <figure className="gallery__item gallery__item--4">
                                        <img src={location.state.images[3]} alt="" />
                                   </figure>
                                   <figure className="gallery__item gallery__item--5">
                                        <img src={location.state.images[4]} alt="" />
                                   </figure>
                              </div>
                         </div>

                         <div className='detail_content'>
                              <div className='card_detail'>
                                   <Tabs
                                        id="controlled-tab-example"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                   >
                                        <Tab eventKey="amenities" title="Amenities">
                                             Tab content for Amenities
                                        </Tab>
                                        <Tab eventKey="reviews" title="Reviews">
                                             Tab content for Profile
                                        </Tab>
                                        <Tab eventKey="location" title="Location" disabled>
                                             Tab content for Location
                                        </Tab>
                                   </Tabs>
                              </div>
                              {/* ============================= */}
                              <div className='card_reservation'>
                                   <div className='item_1'>
                                        <div className='item_2'>
                                             <span>$ {location.state.price}</span>
                                        </div>
                                        <div className='item_3'>
                                             <box-icon size="xs" name='star'></box-icon>
                                             <span> 4,84  </span>
                                             <span> - {location.state.reviews} reviews</span>
                                        </div>
                                   </div>
                                   <div className='item_4'>
                                        <div className='item_5'>
                                             <div className='item_6'>
                                                  <span>CHECK-IN  </span>
                                                  <input
                                                       type="date"
                                                       min={currentDate}
                                                       value={startDate}
                                                       onChange={handleOnchangeStartDate} />
                                             </div>
                                             <div className='item_6'>
                                                  <span>CHECK-OUT  </span>
                                                  
                                                  <input
                                                       type="date"
                                                       min={currentDate}
                                                       value={endDate}
                                                       onChange={handleOnchangeEndDate} />
                                             </div>
                                        </div>
                                        {/* <div className='item_7'>
                                             GUEST
                                        </div> */}
                                        <div className='item_8'>
                                             <button onClick={handleClickReseve}>{endDate && startDate ? "RESERVE" : "CHECK AVAILABILITY"}</button>
                                        </div>
                                        {endDate && startDate ? (<div className='item_9'>
                                             <div className='item_10'>
                                                  <div className='item_11'>
                                                       <span> $ {location.state.price} x {rentalDuration ? rentalDuration : '1'} night</span>
                                                  </div>
                                                  <div className='item_11'>
                                                       <span>$ {total < location.state.price ? location.state.price : total}</span>
                                                  </div>
                                             </div>
                                             <div className='item_10'>
                                                  <div className='item_11'>
                                                       <span>TOTAL</span>
                                                  </div>
                                                  <div className='item_11'>
                                                       <span>$ {total < location.state.price ? location.state.price : total}</span>
                                                  </div>
                                             </div>
                                        </div>) : ("")}


                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>

     )
}
export default Detail