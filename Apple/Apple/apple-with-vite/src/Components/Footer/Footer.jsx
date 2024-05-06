import React ,{useEffect,useState}from 'react'
import FooterLink from './FooterLink'
import $ from 'jquery';

function Footer() {
 
  const[jq ,setJq]=useState(0)
    useEffect(
        ()=>{
            $('footer-country-name').mouseover(
                $(this).css('color','red')
            )
        },[]
    )

  return (
    <footer className="footer-wrapper">
    <div className="container"> 
        <div className="upper-text-container cont">
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after tra1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. <br /> <br />

                To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City br /anch. <br /> <br />

                
                If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card. <br /> <br />

                Learn more about how Apple Card applications are <a href="/">evaluated at support.apple.com/kb/HT209218.</a> <br /> <br />
                
                A subscription is required for Apple TV+.
        </div>
        <FooterLink />
       
        <div className="my-apple-wrapper cont"> 
            More ways to shop: <a href="/">Find an Apple Store</a> or <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper cont row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Use</a></li>
                    <li><a href="/">Sales and Refunds</a></li>
                    <li><a href="/">Legal</a></li>
                    <li><a href="/">Site Map</a></li>
                </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="footer-country-name">AY [Abenezer Y]</div> 
            </div>
        </div>
    </div>
</footer> 
  )
}

export default Footer