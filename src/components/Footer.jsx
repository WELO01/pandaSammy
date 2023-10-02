import React from 'react'
import iconoLocation from '../assets/iconoLocation.png'
import correo from '../assets/iconoMail.png'




const Footer = () => {
  return (
    <div className='footer'>
      <h1>Information</h1>
      <div className='information'>        
        <div className='sideleft'>
        <h3><img src={iconoLocation} alt='icon location'/> <a href='https://www.google.com/maps/place/275+Portsmouth+Ave,+Stratham,+NH+03885/@43.0446581,-70.889753,17z/data=!3m1!4b1!4m6!3m5!1s0x89e2eb76a42e74b1:0x3e3c46df1bb6d966!8m2!3d43.0446581!4d-70.889753!16s%2Fg%2F11hd6_t1n2?entry=ttu'>275 Portsmouth Ave, Stratham, NH 03885</a></h3>
        <h3><img src={correo} alt='icon mail'></img>Samueljosebrg01@hotmail.com</h3>
        <h3>Panda Tranport: (603)-997-2919 </h3>
        </div>  
        
      </div>
    </div>
  )
}

export default Footer
