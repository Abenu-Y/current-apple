import React from 'react'
import Images from '../../../constant/Images/Images'
function Slider() {

    let counter = 1;
    setInterval(
       function(){
           document.getElementById('radio'+counter).checked = true;
           counter++;

           if(counter>4){
               counter=1;
           }
       },
       5000
    )
  return (
    <div className="slider-container">
    <div className="slider">
        <div className="slides">
    
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            <input type="radio" name="radio-btn" id="radio5"/>
            <input type="radio" name="radio-btn" id="radio6"/>
            <input type="radio" name="radio-btn" id="radio7"/>

    
    
            <div className="slide first">
                <img src={Images.comedy} alt="" />
            </div>
            <div className="slide">
                <img src={Images.documentary} alt="" />
            </div>
            <div className="slide">
                <img src={Images.drama} alt="" />
            </div>
            <div className="slide">
                <img src={Images.livegame} alt="" />
            </div>
            <div className="slide">
                <img src={Images.mls} />
            </div>
            <div className="slide">
                <img src={Images.fiction} alt="" />
            </div>
            <div className="slide">
                <img src={Images.thriller} alt="" />
            </div>
    
    
            <div className="naviagtion-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
                <div className="auto-btn6"></div>
                <div className="auto-btn7"></div>

    
            </div>
        </div>
    
     <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
        <label for="radio5" className="manual-btn"></label>
        <label for="radio6" className="manual-btn"></label>
        <label for="radio7" className="manual-btn"></label>

    
     </div>
    
    
    </div>
</div>
  )
}

export default Slider