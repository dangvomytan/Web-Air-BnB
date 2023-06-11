import React from 'react'
import Header from '../../components/header/Header'
import ListSearch from '../../components/listSearch/ListSearch'
import FooterSign from '../../components/footer-sign/Footer-Sign'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Search() {
  return (
     <>
     <Header/>
    <ListSearch/>
    <FooterSign/>
     </>
  )
}

export default Search