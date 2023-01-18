import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
	const { currency } = useContext(AppContext);
	
	return (
    <div>

    <div style={{display: 'flex', alignItems: 'center', backgroundColor: 'lightgreen', padding: "1rem", borderRadius: 10, maxWidth: '250px'}}>
    <label style={{marginRight: '10px'}} className='text-white'>Currency</label>
    <select className='form-select border-0' style={{color: 'white', backgroundColor: 'lightgreen', maxWidth: '150px'}} name={currency}>
        <option className='text-dark' value={'$'}>$ Dollar</option>
        <option className='text-dark' value={'£'}>£ Pound</option>
        <option className='text-dark' value={'€'}>€ Euro</option>
        <option className='text-dark' value={'₹'}>₹ Rupee</option>
    </select>
    </div>

    </div>
    
	);
};

export default ChangeCurrency;