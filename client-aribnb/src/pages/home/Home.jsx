import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ListProduct from '../../components/listProduct/ListProduct'
import FooterSign from '../../components/footer-sign/Footer-Sign'

function Home() {
  return (
     <>
     <Header/>
     <ListProduct/>
     <FooterSign/>
     </>

  )
}

export default Home