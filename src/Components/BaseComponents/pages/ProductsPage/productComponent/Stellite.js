import React from 'react'
import Products from '../Products'
import Contact_btn from '../../../contact_btn'


const Stellite = () => {
  var heading='Contact Modi Metals for Stellite Materials Today'
  var text='Contact us for more information regarding our Stellite material options, or request a quote for further pricing details today. Modi Metals is your trusted Stellite supplier and manufacturer of premium Stellite materials.'

  return (
    <>
    <Products message="Stellite"/>
    <div>Stellite</div>

    <Contact_btn  content={{heading:heading,text:text}}/>
    </>
  )
}

export default Stellite