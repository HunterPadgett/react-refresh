import React from "react";
import { BsWordpress } from "react-icons/bs";
import {
 SiShopify,
 SiHubspot,
 SiAdobephotoshop,
 SiFigma,
 SiMailchimp,
//  SiWix,
 SiGoogleanalytics,
} from "react-icons/si";
import { BiTestTube } from "react-icons/bi";

const Backend = () => {
 return (
  <div className="skills__content">
   <h3 className="skills__title">Content / CMS / Email</h3>
   <div className="skills__box">
    <div className="skills__group">
     <div className="skills__data">
      <BsWordpress />
      <div>
       <h3 className="skills__name">WordPress</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiHubspot />
      <div>
       <h3 className="skills__name">HubSpot</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiFigma />
      <div>
       <h3 className="skills__name">Figma</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiMailchimp />
      <div>
       <h3 className="skills__name">Mailchimp</h3>
      </div>
     </div>
    </div>
    <div className="skills__group">
     <div className="skills__data">
      <SiShopify />
      <div>
       <h3 className="skills__name">Shopify</h3>
      </div>
     </div>
     <div className="skills__data">
      <BiTestTube />
      <div>
       <h3 className="skills__name">Litmus</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiAdobephotoshop />
      <div>
       <h3 className="skills__name">Photoshop</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiGoogleanalytics />
      <div>
       <h3 className="skills__name">Google Analytics</h3>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Backend;
