

import React from 'react';
import {useLayoutEffect } from "react";
import {useState} from 'react'




const CyberSecurity= () => {

   const colum={cols : "col-12 col-md-6 col-lg-4" }
    
   const product=[
    {"name": "Cyber defense","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709028668/Compucom_Blog_-_Your_IT_Infrastructure_7_Critical_Questions_mjz5qv.webp","details": "Cyber defense is a coordinated act of resistance that guards information, systems, and networks from cyber attacks by implementing protective procedures such as firewalls, network detection and response (NDR), endpoint detection and response (EDR) to identify, analyze, and report incidents that occur within a network."},
    {"name": "Cyber ethics, law, and policy","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709029129/cyber_security_protocols_c1974fb1ed_uaxtwf.png","details": "Cyber defense is a coordinated act of resistance that guards information, systems, and networks from cyber attacks by implementing protective procedures such as firewalls, network detection and response (NDR), endpoint detection and response (EDR) to identify, analyze, and report incidents that occur within a network."},
    {"name": "Information systems","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709029128/industry-3087393_640_yzglv6.jpg","details": "Cyber defense is a coordinated act of resistance that guards information, systems, and networks from cyber attacks by implementing protective procedures such as firewalls, network detection and response (NDR), endpoint detection and response (EDR) to identify, analyze, and report incidents that occur within a network."},
    {"name": "Data communications and networking","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709029128/download_fxhbu7.jpg","details": "Cyber defense is a coordinated act of resistance that guards information, systems, and networks from cyber attacks by implementing protective procedures such as firewalls, network detection and response (NDR), endpoint detection and response (EDR) to identify, analyze, and report incidents that occur within a network."},
    {"name": "Digital forensics","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709029128/istockphoto-1210917316-612x612_nkxqpt.jpg","details": "React is a declarative, component-based, open-source front-end JavaScript library for building user interfaces. Whew! There's a lot to unpack there, so let's go through each piece of that definition. it is realy helpful"},
    {"name": "Information technology","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709029427/83-838155_technology-background_qj6rbf.jpg","details": "Cyber defense is a coordinated act of resistance that guards information, systems, and networks from cyber attacks by implementing protective procedures such as firewalls, network detection and response (NDR), endpoint detection and response (EDR) to identify, analyze, and report incidents that occur within a network."}
 


]
    return (
        <div className='bg_im'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                    <h1 className='heading'>Cyber Security</h1>
              </div>
            
          
            {product.map((d,inx)=>(<div key={inx} className={colum.cols}>
              <div className='cards-im'>
                <img src={d.image} className='photos-size-1'/>
                <h5> {d.name}</h5>
                <p>{d.details}</p>
                <div className='btnout'>
                <button className='btns'>Lean More</button>
                </div>
              

              </div>
              
              </div>))}
          
  
            </div>
            </div>
        </div>
    );
};

export default CyberSecurity;