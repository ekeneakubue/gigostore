import React from 'react'
import './Banner.css'



function Banner(){
    return(
      <div className='filter'>
          <div className='col-4 full'>
            <ul className='ban'>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewellries</li>
            </ul>
          </div>
      </div>      
    )
}

export default Banner;