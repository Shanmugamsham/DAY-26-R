import React from 'react';
import {useLayoutEffect } from "react";
import {useState} from 'react'




const FullStackDevelepment = () => {

   const colum={cols : "col-12 col-md-6 col-lg-4" }
    
  const product=[
    {"name": "HTML","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014137/HTML5_logo_wxffhq.png","details": "What is HTML? HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page."},
    {"name": "CSS","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014815/png-clipart-cascading-style-sheets-logo-html-css3-sass-others-miscellaneous-blue-thumbnail-removebg-preview_jqnhu7.png","details": "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).using fro webs and adding more styles"},
    {"name": "JAVASCRIPT","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014814/javascript-programming-language-introduction-removebg-preview_e9wlor.png","details": "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."},
    {"name": "BOOSTRAP","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014814/screenshot_readme-removebg-preview_afozhr.png","details": "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."},
    {"name": "REACT","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014816/685-6854994_react-logo-no-background-hd-png-download-removebg-preview_man5vp.png","details": "React is a declarative, component-based, open-source front-end JavaScript library for building user interfaces. Whew! There's a lot to unpack there, so let's go through each piece of that definition. it is realy helpful"},
    {"name": "MYSQL","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014817/bw-mysql-removebg-preview_meu1r1.png","details": "MySQL is a relational database management system    A relational database stores data in separate tables rather than putting all the data in one big storeroom. The database structure is organized into physical files optimized for speed."},
    {"name": "NODEJS","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014818/download__3_-removebg-preview_uzynnp.png","details": "Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."},
    {"name": "MONGODP","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709014137/1_DiNIG4Bfpm65_wwXf_JwMA_hyiy3x.png","details": "MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. The document model maps to the objects in your application code, making data easy to work with.this is most usefull database and also famouse"}


]

  
    return (
        <div className='bg_im'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                    <h1 className='heading'>Full Stack Development</h1>
              </div>
            
          
            {product.map((d,inx)=>(<div key={inx} className={colum.cols}>
              <div className='cards-im'>
                <img src={d.image} className='photos-size'/>
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

export default FullStackDevelepment;