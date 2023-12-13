import React from 'react'
import './balance.css'
import logo from '../../design/image/logo.svg';  


function Balance() {
  return (
    <div className='container1'>
        <div className='mybalance'>My balance</div>
    <div className='amount'>$921.48</div>
    <img className="logo"
    src={logo} alt="logo" />
    </div>
  )
}

export default Balance;