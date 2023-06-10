import React from 'react'
import './ListProduct.css'
import SlideImage from '../slide-image/Slide-image'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';





function ListProduct() {
     // const dispatch = useDispatch();
     const ProductData = useSelector((state) => state.product);
     const navigate = useNavigate();
     
     const handleOnClickRooms =(item) =>{
               // console.log("item>>>", item);
               navigate('/rooms',{state:item});
     }


     return (
          <div className='list_product_body'>
          <div className='list_product_content'>
               {
                    ProductData.map((item) => {
                         return (
                              <div key={item.id} onClick={()=>handleOnClickRooms(item)}>
                                   <div className='lp_Card'>
                                        <div className='lp_Card_image'>
                                             <SlideImage images={item.images}/>
                                        </div>
                                        <div className='lp_Card_title'>
                                             <div className='title_name'>
                                                  <b>{item.nameBnb}</b>
                                             </div>
                                             <div className='title_star'>
                                                  <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>    
                                                  {"  "}
                                                  <span>{item.reviews}</span>
                                             </div>
                                        </div>
                                        <div className='lp_Card_conten'>{"  "}</div>
                                        <div className='lp_Card_price'>
                                             <b>$ <span>{item.price}</span></b> <span>night</span>
                                        </div>
                                        {/* <div className='icon-heart'>
                                             <box-icon name='heart' size='md' color='var(--color-icon-heart)' type='solid' animation='tada' ></box-icon>
                                        </div> */}
                                   </div>
                              </div>
                         )
                    })
               }

          </div>
          </div>

     )
}

export default ListProduct