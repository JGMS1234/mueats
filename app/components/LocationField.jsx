import React from 'react';

const LocationField = () => {
	return (
		<div className='flex gap-2 rounded-2xl p-2 bg-(--primary-colour)'>
			<span className='bg-slate-50 px-2'>S</span>
			<div className='bg-(--secondary-colour) rounded-2xl p-2 flex justify-between'>
				10/F Main Campus
			</div>
		</div>
	);
};

export default LocationField;
