import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function SwipeableTemporaryDrawer() {
  const[open, setOpen] =useState(false)
  
  return (
    <div>
        <Button onClick={()=> setOpen(true)}>
          <MenuRoundedIcon className='link'/>
        </Button>
        <SwipeableDrawer anchor={'right'} open={open} onClose={()=> setOpen(false)}>
         <div className='drawer-div'>
          <a href="/"><p className='link'>Home</p></a>
          <a href="/"><p className='link'>Compare</p></a>
          <a href="/"><p className='link'>Watchlist</p></a>
          <a href="/"><p className='link'>Dashboard</p></a>
         </div>
        </SwipeableDrawer>
    </div>
  );
}
