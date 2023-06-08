import './Detail.css'
import Header from '../../components/header/Header'
import { useEffect, useMemo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

function Detail() {
     const [key, setKey] = useState('home');
     const location = useLocation();
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [total,setTotal] =  useState(0)

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

               alert("Ngày bắt đàu nhỏ hơn hoặc bằng ngày bắt đầu.");
          }
     };

     const handleOnchangeEndDate = (e) => {
          const formattedDate = moment(e.target.value).format('YYYY-MM-DD');
          if (formattedDate >= startDate) {
               setEndDate(formattedDate);
          } else {
               alert("Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu.");
          }
     };
     useEffect(()=>{
          if(rentalDuration)
          {
               const total = Number(location.state.price)*Number(rentalDuration)
               setTotal(total)
          }
     },[rentalDuration])


     console.log("startDate", startDate);
     console.log("endDate", endDate);
     console.log("rentalDuration", rentalDuration);

     return (
          <>
               <div className='detail_body'>
                    <Header />
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
                                             <span>$ {total>location.state.price?total:location.state.price}</span>
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
                                                  CHECK-IN
                                                  <input
                                                       type="date"
                                                       min={currentDate}
                                                       value={startDate}
                                                       onChange={handleOnchangeStartDate} />
                                             </div>
                                             <div className='item_6'>
                                                  CHECK-OUT
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
                                             <button>CHECK AVAILABILITY</button>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>

     )
}

export default Detail