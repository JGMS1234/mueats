import React from 'react';
import SearchIcon from '../../public/icons/searchIcon.svg';
import Image from 'next/image';
import filterIcon from '../../public/icons/filterIcon.svg';

const SearchItem = () => {
  return (
    <div className='w-80 mt-4 mb-12 flex gap-2 relative rounded-4xl items-center py-2 px-4 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
        <span className='size-4'></span>
        <Image
        src={SearchIcon}
        alt='Search Icon'
        className='size-8 absolute bottom-[50%] left-2 translate-y-[50%]'
        />
        <div className='bg-(--secondary-colour) rounded-3xl p-2 text-sm flex gap-2 items-center'>
            <input className='opacity-75 font-semibold' type='text'  placeholder='Search for restaurants, dishes...'></input>
        </div>
        <Image
        src={filterIcon}
        alt='Filter Icon'
        className='size-8 absolute right-2'
        />
    </div>
  )
}

export default SearchItem;