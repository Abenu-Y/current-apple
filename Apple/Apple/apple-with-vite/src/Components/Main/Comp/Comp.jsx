import React from 'react'

function Comp(props) {
  return (
            <div className={props.classNo}>
                    <div className={props.container}>
                        <div className={`title ${props.additional}`}>{props.title}</div>
                        <div className="description">{props.description}</div>
                        <div className="learnAndBuyLinks">
                                <a href="/">Learn more</a> 
                                <a href="/">Buy</a>          
                        </div>
                    </div>
           </div>
  )
}

export default Comp