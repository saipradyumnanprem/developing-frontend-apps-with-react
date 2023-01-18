import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, currency } = useContext(AppContext);

	return (
		<div className='alert alert-secondary'>
			<label>Budget: {currency}</label>
			<input type="number" 
      defaultValue={budget} 
      onChange={(event) => {
        const newBudget = event.target.value;
        if (newBudget > 20000) {
          alert("Budget value limit reached!");
          event.target.value = 20000;
        }

      }} 
      
      step={10}></input>
		</div>
	);
};

export default Budget;
