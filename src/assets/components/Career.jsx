
import React from 'react';
import {useLayoutEffect } from "react";
import {useState} from 'react'




const Career = () => {

   const colum={cols : "col-12 col-md-6 col-lg-4" }
    
    const product =[
       {"name": "PYTHONE","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030839/desktop-wallpaper-programming-python-and-other-coding-python-programmer_onqcr1.jpg","details": "What is HTML? HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page."},
       {"name": "AI","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030915/the-4-top-artificial-intelligence-trends-for-2021_gaijuu.jpg","details": "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).using fro webs and adding more styles"},
       {"name": "MACHINE LEANING","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030840/1000_F_135990387_SsPQSvbreQP7nWCpT3ppbRzkpvcWgZRz_oftxk7.jpg","details": "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
       
   
   
   ]
   
    return (
        <div className='bg_im'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                    <h1 className='heading'> Career </h1>
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

export default Career;