'use client';
import { useState } from 'react';
import FilterBtn from '../../public/icons/filterIcon.svg';
import SearchBtn from '../../public/icons/searchIcon.svg';
import Image from 'next/image';

const SearchBar = ({ handleSearch, handleFilter, placeholder }) => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className='flex gap-2 justify-between pointer-events-auto items-center w-full'>
			<div className='flex gap-2 rounded-l-3xl items-center bg-(--primary-colour) backdrop-blur-lg px-4 py-2 drop-shadow-md w-[80%]'>
				<Image
					src={SearchBtn}
					alt='Search'
					className='size-8 transition-all duration-300 ease-in-out'
				/>
				<input
					onChange={(e) => {
						setSearchTerm(e.target.value);
						handleSearch(e.target.value);
					}}
					value={searchTerm}
					placeholder={placeholder || 'Search for restaurants, dishes...'}
					className='w-full bg-(--secondary-colour) placeholder:text-sm text-base font-medium placeholder:font-semibold px-2 py-1 placeholder:pl-2 rounded-3xl hover:scale-95 active:scale-100 transition-all ease-in-out duration-300 focus:ring-0 focus:scale-100 ring-slate-50'
				/>
			</div>

			<div
				className='w-[15%] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out rounded-r-3xl px-4 py-2 bg-(--primary-colour) backdrop-blur-lg drop-shadow-md'
				onClick={handleFilter}>
				<Image
					src={FilterBtn}
					alt='Filter'
					className='size-8'
				/>
			</div>
		</div>
	);
};

export default SearchBar;
