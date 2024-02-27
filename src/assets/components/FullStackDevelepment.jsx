import React from 'react';
import {useLayoutEffect } from "react";
import {useState} from 'react'




const FullStackDevelepment = () => {

   const colum={cols : "col-12 col-md-6 col-lg-4" }
    
  const [product, setproduct] = useState([])
  console.log(setproduct);

  useLayoutEffect(() => {
    fetch("http://localhost:5174/fullstack.json").then((respon)=>respon.json()).then((res)=>{
      console.log(res)

      setproduct(res.data)
    
    
    }).catch((erre)=>console.log(erre))
    return () => {
   
    };
  }, []);

 console.log(product)
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