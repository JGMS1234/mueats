import ProfilePic from '../../../public/icons/ProfilePic.png';
import Image from 'next/image';

const SettingsPage = () => {

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold pb-12'>Account Settings</h1>
            </div>
        <div className='flex items-start gap-18'>
            <div className='pt-12'>
                    <Image
                    src={ProfilePic}
                    alt='Profile Picture'
                    className='size-48 rounded-full'
                    />
                    <div className='left-12 w-48 h-10 size-16 bg-(--secondary-colour) rounded-full pl-8 pt-2 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                        Set Profile Picture
                    </div>
                </div>
            <div className='bg-(--secondary-colour) w-full pl-12 h-130 mt-12'>
                    <div className='w-120 mt-3 mb-6 flex gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
                        <span className='pt-1'>Your name</span>
                        <span className='size-4 pl-2'></span>
                        <div className='bg-white w-80 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                            <input className='opacity-75 font-semibold' type='text'  placeholder='Steven'></input>
                        </div>
                    </div>
                    <div className='w-120 flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
                        <span className='pt-1'>Your email</span>
                        <span className='size-4 pl-2'></span>
                        <div className='bg-white w-80 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                            <input className='opacity-75 font-semibold' type='text'  placeholder='user@gmail.com'></input>
                        </div>
                    </div>
                    <div className='w-120 flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
                        <span className='pt-1'>Phone Number</span>
                        <span className='size-4 pl-2'></span>
                        <div className='bg-white w-80 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                            <input className='opacity-75 font-semibold' type='text'  placeholder='077 123 4567'></input>
                        </div>
                    </div>

                    <div className='w-120 flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
                        <span className='pt-1'>Password</span>
                        <span className='size-4 pl-2'></span>
                        <div className='bg-white w-80 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                            <input className='opacity-75 font-semibold' type='text'  placeholder='****'></input>
                        </div>
                    </div>
                    <button
                    className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
                    >
                        Edit
                    </button>
            </div>
            <div className='flex flex-col '>
             <div className='bg-(--secondary-colour) w-full pl-12 mt-12 h-60'>
                    <div className='w-120 mt-3 mb-6 flex gap-2 py-3 px-4 cursor-pointer'>
                        <span className='pt-1'>Saved default delivery address</span>
                        <span className='size-4 pl-2'></span>
                        <div className='bg-white w-80 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
                            <input className='opacity-75 font-semibold' type='text'  placeholder='10/F Main Campus'></input>
                        </div>
                    </div>

                    <button
                    className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
                    >
                        Edit
                    </button>
                    <button
                    className='bg-(--primary-colour) text-black ml-12 mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
                    >
                        Delete
                    </button>
        
            </div>
                <div className='bg-(--secondary-colour) w-160 pl-12 pt-12 h-60 mt-10'>

                    Promotional offers
                    
                 </div>
            </div>
            </div>
        </div>
    )


}

export default SettingsPage;