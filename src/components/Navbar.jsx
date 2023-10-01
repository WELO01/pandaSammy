import React from 'react'
import pandaLogo from '../assets/logoPandaWeb.png'
import iconoMennu from '../assets/iconomennu.png'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navBarDividido'>
        <div className='whiteSide'>
            <img src={pandaLogo}/>
        </div>
        <div className='blackSide'>
            <img src={iconoMennu}/>
        </div>
      </div>
      <div className='cdl_t_s'>
        <h3>CDL TRAINING SCHOOL</h3>
      </div>
    </div>
  )
}

export default Navbar
