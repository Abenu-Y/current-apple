import React from 'react'

function CompTwo(props) {
  return (
            <section>
                        <div class={`${props.wrapper} row`}>

                                <div class="left-side col-md m-1">
                                    <div class="title">
                                        {props.imgOne ?<img src={props.imgOne}/>:props.titleOne}
                                   </div>
                                    <div class="descriptions">{props.descriptionOne}</div>
                                    <div class="learnAndBuyLinks">
                                        {
                                            props.secondLink?<a href="/">{props.secondLink}</a>:<>
                                            <a href="/">Learn more</a> 
                                            <a href="/">Buy</a>          
                                        </>
                                          
                                        }    
                                    </div>

                                </div>

                                <div class="right-side col-md m-1">

                                    <div class="title">
                                        {props.imgTwo ?<img src={props.imgTwo}/>:props.titleTwo}
                                    </div>
                                    <div class="descriptions">{props.descriptionTwo}</div>
                                    <div class="learnAndBuyLinks">
                                    {
                                            props.secondLink2?<a href="/">{props.secondLink2}</a>:<>
                                            <a href="/">Learn more</a> 
                                            <a href="/">Buy</a>          
                                        </>
                                            
                                        }          
                                    </div>
                                </div>

                        </div>
            </section>
  )
}

export default CompTwo