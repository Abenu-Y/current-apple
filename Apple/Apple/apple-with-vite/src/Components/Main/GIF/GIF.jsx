import React from 'react'
import Images from '../../../constant/Images/Images'

function GIF() {
  return (
    <div className="gif-container">
    <div className="content">
         
        <div>
            <img src={Images.watchLogo} alt="" />
          </div>
          <div className="descriptionAnim">
             <h4>Double tap. A magical new way to use Apple Watch.</h4>
          </div>
          <div className="learnAndBuy">
         
                <a href="/">Learn more</a> 
               <a href="/">Buy</a>
           
          </div>
    </div>
</div>
  )
}

export default GIF