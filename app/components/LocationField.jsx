import React from 'react';

const LocationField = () => {
	return (
		<div className='flex gap-2 rounded-4xl items-center p-2 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
			<span className='bg-slate-50 h-4 w-6'></span>
			<div className='bg-(--secondary-colour) rounded-3xl p-2 text-sm flex gap-2 items-center'>
				<span className='opacity-75 font-semibold'>10/F Main Campus</span>
				<span className='bg-slate-900 h-2 w-6'></span>
			</div>
		</div>
	);
};

export default LocationField;
