import React from 'react'

function HeaderLink(props) {
  return (
    <li className="nav-item">
       <a className="nav-link js-scroll-trigger" href={props.LinkUrl}>    
        
           {props.imgPath ?<img src={props.imgPath}
           />:props.LinkName
           }
           
       </a>
   </li>
  )
}

export default HeaderLink