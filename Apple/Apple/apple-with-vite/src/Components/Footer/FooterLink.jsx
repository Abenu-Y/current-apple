import React from 'react'
import footerDataSections from './footerData/footerDataSections'
import ColumnFooter from './ColumnFooter'

function FooterLink() {
  return (

    <div className="footer-links-wrapper cont row"> 
            {
                footerDataSections.map((section,i)=>
                        <div key={i} className=" col-md">
                         
                                   <ColumnFooter  data ={section} />
                            
                        </div> 
                )}

    </div>
)
}


export default FooterLink