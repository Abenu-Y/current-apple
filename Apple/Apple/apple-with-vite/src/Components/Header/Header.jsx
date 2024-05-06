import React from 'react'
import Images from '../../constant/Images/Images'
import HeaderLink from './HeaderLink/HeaderLink'


function Header() {


        const LinksInfo = [
            {LinkUrl:'/',imgPath:Images.logo},
            {LinkUrl:'/store',LinkName:'Store'},
            {LinkUrl:'/mac',LinkName:'Mac'},
            {LinkUrl:'/ipad',LinkName:'iPad'},
            {LinkUrl:'/iphone',LinkName:'iPhone'},
            {LinkUrl:'/watch',LinkName:'Watch'},
            {LinkUrl:'/vision',LinkName:'Vision'},
            {LinkUrl:'/airpods',LinkName:'Air Pods'},
            {LinkUrl:'/tvandhome',LinkName:'Tv & Home'},
            {LinkUrl:'/entertainment',LinkName:'Entertainment'},
            {LinkUrl:'accessories',LinkName:'Accessories'},
            {LinkUrl:'/support',LinkName:'Support'},
            {LinkUrl:'/search',imgPath:Images.search},
            {LinkUrl:'/cart',imgPath:Images.cart}
           
        ]
      
  return (
    <div className="nav-wrapper fixed-top">
    <div className="container">
      <nav className="navbar navbar-toggleable-sm navbar-expand-md">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          ☰
        </button>
     
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav nav-justified w-100 nav-fill">


            {
                LinksInfo.map((info,i)=>
                    <HeaderLink key={i} LinkUrl={info.LinkUrl} LinkName ={info.LinkName} imgPath={info.imgPath}  />
                )
            }
          
          </ul>
        </div>
      </nav>
    </div>
</div>
  )
}

export default Header