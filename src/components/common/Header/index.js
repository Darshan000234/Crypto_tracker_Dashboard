import React from 'react';
import SwipeableTemporaryDrawer from './drawer';
import "./style.css";
import Button from '../Button';
function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker <span style={{color:'var(--blue)'}}>.</span></h1>
      <div className='links'>
        <a href="/"><p className='link'>Home</p></a>
        <a href="/"><p className='link'>Compare</p></a>
        <a href="/"><p className='link'>Watchlist</p></a>
        <a href="/"><Button text={"Dashboard"}
            onClick={()=>console.log("btn checked")}/></a>
        
      </div>
      <div className='mobile-drawer'>
        <SwipeableTemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header
