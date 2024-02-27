import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import FullStackDevelepment from './FullStackDevelepment';
import Career from './Career';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import All from './All';


const Navbar = () => {
    return (
        <div>
            
            
            
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-siz fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Course Details</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item m-1">
          <Link className="nav-link active" aria-current="page" to='/All'>ALL</Link>
        </li>
        <li className="nav-item  m-1">
          <Link className="nav-link "  to='/fullstackpage'>Full Stack Development</Link>
        </li>
        <li className="nav-item  m-1">
          <Link className="nav-link"  to='/CyberSecurity'>CyberSecurity</Link>
        </li>
        <li className="nav-item  m-1">
          <Link className="nav-link"  to='/DataScience'>DataScience</Link>
        </li>
        <li className="nav-item  m-1">
          <Link className="nav-link"  to='/Career'>Career</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/All' element={<All/>}/>  
    <Route path='/fullstackpage' element={<FullStackDevelepment/>}/>
    <Route path='/CyberSecurity' element={<CyberSecurity/>}/>
    <Route path='/DataScience' element={<DataScience/>}/>
    <Route path='/Career' element={<Career/>}/>
   
</Routes>

</BrowserRouter>         
            
        </div>
    );
};

export default Navbar;