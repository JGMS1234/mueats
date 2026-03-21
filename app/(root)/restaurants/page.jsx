import React from 'react'
import SearchItem from '@/app/components/SearchItem'
import Ebs from '../../../public/images/ebs.png';
import MuCafe from '../../../public/images/mucafe.png';
import SnackBar from '../../../public/images/snackbar.png';
import Jbl from '../../../public/images/JblClub.png';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <SearchItem/>
        Main Campus
      <div className='flex justify-between mt-4'>
      <div className="mx-6 w-120 h-30 mt-4 mb-12 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
        <Image
            src={Ebs}
            alt='Cafe Image'
            className='size-20 absolute left-6 rounded-2xl'
            />
            <span className='pl-30 size-4'></span>
            <div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
                <div className='flex align-items: center'>
                    <span className='opacity-75 font-semibold'>Ebeneezer's Kebabs & Pizzeria</span>
                </div>
                <div className='mt-6 flex gap-2'>
                    <span className='opacity-75 font-semibold'>Middle-Eastern & Indian Cuisine; Halal</span>
                </div>
            </div>
      
      </div>
      <div className="mx-6 w-120 h-30 mt-4 mb-12 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
        <Image
            src={MuCafe}
            alt='Cafe Image'
            className='size-20 absolute left-6 rounded-2xl'
            />
            <span className='pl-30 size-4'></span>
            <div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
                <div className='flex align-items: center'>
                    <span className='opacity-75 font-semibold'>MU Café</span>
                </div>
                <div className='mt-6 flex gap-2'>
                    <span className='opacity-75 font-semibold'>Coffee, sandwiches, desserts, salads, etc</span>
                </div>
            </div>
      </div>
      <div className="mx-6 w-120 h-30 mt-4 mb-12 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
        <Image
            src={SnackBar}
            alt='Cafe Image'
            className='size-20 absolute left-6 rounded-2xl'
            />
            <span className='pl-30 size-4'></span>
            <div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
                <div className='flex align-items: center'>
                    <span className='opacity-75 font-semibold'>Snack Bar</span>
                </div>
                <div className='mt-6 flex gap-2'>
                    <span className='opacity-75 font-semibold'>Taiwanese Snacks</span>
                </div>
            </div>
      </div>
    </div>
    Jockey Club Campus
    <div className='mt-8'>
      <div className="mx-6 w-120 h-30 mt-4 mb-12 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
        <Image
            src={Jbl}
            alt='Cafe Image'
            className='size-20 absolute left-6 rounded-2xl'
            />
            <span className='pl-30 size-4'></span>
            <div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
                <div className='flex align-items: center'>
                    <span className='opacity-75 font-semibold'>Jubilee Club</span>
                </div>
                <div className='mt-6 flex gap-2'>
                    <span className='opacity-75 font-semibold'>Hong Kong cuisine and Hong Kong-style
Western cuisine</span>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default page