import React from 'react';
import FullStackDevelepment from './FullStackDevelepment';
import CyberSecurity from './CyberSecurity';
import DataScience from './DataScience';
import Career from './Career';


const All = () => {
    return (
        <div className='bg-image1'>
           <FullStackDevelepment/>
           <CyberSecurity/>
           <DataScience/>
           <Career/>
            
        </div>
    );
};

export default All;