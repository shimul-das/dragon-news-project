import React from 'react'
import one from '../../../../assets/qZone1.png';
import two from '../../../../assets/qZone2.png';
import three from '../../../../assets/qZone3.png';


const QZone = () => {
  return (
    <div className='bg-secondary text-center'>
        <h4 className='bg-secondary'>Q-Zone</h4>
        <div>
            <img src={one} alt="" />
             <img src={two} alt="" />
            <img src={three} alt="" /> 
        </div>
    </div>
  )
}

export default QZone