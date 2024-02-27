
import React from 'react';
import {useLayoutEffect } from "react";
import {useState} from 'react'




const DataScience= () => {

   const colum={cols : "col-12 col-md-6 col-lg-4" }
    
    const product=[
      {"name": "Machine learning","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030340/360_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2_1_xbeezv.jpg","details": "Data science uses modern tools and techniques to find patterns, derive information, and make business decisions. It uses complex machine learning algorithms to build predictive modelsData science uses modern tools and techniques to find patterns, derive information, "},
      {"name": "Statistics","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030341/getty_660952912_363647_jqkp5g.jpg","details": "Data science is an interdisciplinary field that uses algorithms, processes, and procedures to analyze large amounts of data. It combines principles and practices from mathematics,"},
      {"name": "Data structures","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030339/3052-datascientist.jpgL_dfdpxh.jpg","details": "Data science uses modern tools and techniques to find patterns, derive information, and make business decisions. It uses complex machine learning algorithms to build predictive models."},
      {"name": "Data visualization","image":"https://res.cloudinary.com/ddjjx7t57/image/upload/v1709030339/desktop-wallpaper-data-science-data_d6rifc.jpg","details":"Data science is an interdisciplinary field that uses algorithms, processes, and procedures to analyze large amounts of data. It combines principles and practices from mathematics, statistics, artificial intelligence, and computer engineering."}
      
  
  
  ]
    return (
        <div className='bg_im'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                    <h1 className='heading'>Data science </h1>
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

export default DataScience;