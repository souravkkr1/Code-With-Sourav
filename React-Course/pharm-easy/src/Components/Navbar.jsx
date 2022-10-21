import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Style/navbar.module.css'


const Navbar = () => {
  return (
    <>
    <div className=''>

    </div>
    <div className={style.logo}>
        <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0" alt="" />
    </div>
    <div>
      <Link to='/'>Home</Link>
    </div>
    </>
  )
}

export default Navbar
