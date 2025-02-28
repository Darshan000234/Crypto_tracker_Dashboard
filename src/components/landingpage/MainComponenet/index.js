import React from 'react'
import "./style.css"
import Button from '../../common/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import {motion} from 'framer-motion'
import { minor } from '@mui/material'
const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
            <motion.h1 className='track-crypto-heading'
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}  
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5,delay: 0.5}}
            >Real Time.</motion.h1>
            <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className='btn-flex'>
                <Button text={"Dashboard"} />
                <Button text={"Share"} outlined={true}/>
            </div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone} className='iphone'
          initial={{x: -20}}
          animate={{y: 20}}
          transition={{type:'smooth', duration: 2, repeatType: 'mirror', repeat: Infinity}}
        />
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent;
