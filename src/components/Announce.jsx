import React, { useState } from 'react'
import {Close} from '@material-ui/icons';

function Announce() {
    const [announceStyle,setAnnounStyle] = useState('bg-[#8a4af3] font-bold text-white flex item-center justify-center ')
    const handleClose = () =>{
        setAnnounStyle(announceStyle + " hidden")
    }
    return (
        <div className={announceStyle}>
            <h2>Hurry up its 40% off now</h2>
            <Close className='cursor-pointer' onClick={handleClose}/>
        </div>
    )
}

export default Announce