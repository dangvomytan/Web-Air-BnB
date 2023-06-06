import React from 'react'
import './ListProduct.css'
import SlideImage from '../slide-image/Slide-image'
import { useDispatch, useSelector } from 'react-redux'





function ListProduct() {
     // const dispatch = useDispatch();
     const ProductData = useSelector((state) => state.product);

     console.log("list>>>",ProductData);

     return (
          <div className='lp_Container'>
               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <img src="https://a0.muscache.com/im/pictures/d6880d5f-2d42-49eb-b3d3-366b9d285d6c.jpg?im_w=720" alt="" />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='icon_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
                    <div className='icon-heart'>
                         <box-icon name='heart' size='md' color='var(--color-icon-heart)' type='solid' animation='tada' ></box-icon>
                    </div>
               </div>
               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
                    <div className='icon-heart'>
                         <box-icon name='heart' size='md' color='var(--color-icon-heart)' type='solid' animation='tada' ></box-icon>
                    </div>
               </div>
               {/* ===================================================== */}

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>
               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>
               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>

               <var><div className='lp_Card'>
                    <div className='lp_Card_image'>
                         <SlideImage />
                    </div>
                    <div className='lp_Card_title'>
                         <div className='title_name'>
                              <b>ten sdfsdfadf as sa</b>
                         </div>
                         <div className='title_star'>
                              <span>5.0</span>
                              <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                         </div>
                    </div>
                    <div className='lp_Card_conten'>
                         conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                    </div>
                    <div className='lp_Card_price'>
                         <b>$ <span>200</span></b>
                    </div>
               </div>
                    <div className='lp_Card'>
                         <div className='lp_Card_image'>
                              <SlideImage />
                         </div>
                         <div className='lp_Card_title'>
                              <div className='title_name'>
                                   <b>ten sdfsdfadf as sa</b>
                              </div>
                              <div className='title_star'>
                                   <span>5.0</span>
                                   <box-icon name='star' size="var(--size-icon-star)" type='solid' ></box-icon>
                              </div>
                         </div>
                         <div className='lp_Card_conten'>
                              conten ;fsj afj s afsdfj as;f asjfl jsaldf al;sf lsajfl s
                         </div>
                         <div className='lp_Card_price'>
                              <b>$ <span>200</span></b>
                         </div>
                    </div>
               </var>

               {/* ======================================================= */}
          </div>
     )
}

export default ListProduct