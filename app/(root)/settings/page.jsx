import ProfilePic from '../../../public/icons/ProfilePic.png';
import Image from 'next/image';

const SettingsPage = () => {
	return (
		<div>
			<h1 className='text-3xl text-center font-bold pb-12'>Account Settings</h1>
			<div className='flex flex-col lg:flex-row items-center lg:items-start gap-12'>
				<div className=''>
					<Image
						src={ProfilePic}
						alt='Profile Picture'
						className='size-48 rounded-full'
					/>
					<div className='left-12 w-48 h-10 size-16 bg-(--secondary-colour) rounded-full pl-8 pt-2 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
						Set Profile Picture
					</div>
				</div>
				<div className='bg-(--secondary-colour) border border-(--border-colour) w-full lg:w-[35%] px-6 py-4 rounded-3xl'>
					<div className='w-full mt-3 mb-6 flex gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						<span className='pt-1'>Your name</span>
						<span className='size-4 pl-2'></span>
						<div className='bg-(--input-colour) border border-(--border-colour) w-[80%] rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
							<input
								className='opacity-75 font-semibold'
								type='text'
								placeholder='Steven'></input>
						</div>
					</div>
					<div className='w-full flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						<span className='pt-1'>Your email</span>
						<span className='size-4 pl-2'></span>
						<div className='bg-(--input-colour) border border-(--border-colour) w-[80%] rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
							<input
								className='opacity-75 font-semibold'
								type='text'
								placeholder='user@gmail.com'></input>
						</div>
					</div>
					<div className='w-full flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						<span className='pt-1'>Phone Number</span>
						<span className='size-4 pl-2'></span>
						<div className='bg-(--input-colour) border border-(--border-colour) w-[80%] rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
							<input
								className='opacity-75 font-semibold'
								type='text'
								placeholder='077 123 4567'></input>
						</div>
					</div>

					<div className='w-full flex mt-6 gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						<span className='pt-1'>Password</span>
						<span className='size-4 pl-2'></span>
						<div className='bg-(--input-colour) border border-(--border-colour) w-[80%] rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
							<input
								className='opacity-75 font-semibold'
								type='text'
								placeholder='****'></input>
						</div>
					</div>
					<button className='bg-(--primary-colour) mt-6 w-40 h-12 rounded-3xl cursor-pointer border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
						Edit
					</button>
				</div>
				<div className='flex flex-col w-full lg:flex-1'>
					<div className='bg-(--secondary-colour) border border-(--border-colour) w-full px-6 py-4 rounded-3xl'>
						<div className='w-full mt-3 mb-6 flex gap-2 py-3 px-4 cursor-pointer'>
							<span className='pt-1'>Saved default delivery address</span>
							<span className='size-4 pl-2'></span>
							<div className='bg-(--input-colour) border border-(--border-colour) w-[80%] rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
								<input
									className='opacity-75 font-semibold'
									type='text'
									placeholder='10/F Main Campus'></input>
							</div>
						</div>
						<span className='flex gap-4 items-center'>
							<button className='bg-(--primary-colour) mt-6 w-40 h-12 rounded-3xl cursor-pointer border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
								Edit
							</button>
							<button className='bg-(--primary-colour) ml-12 mt-6 w-40 h-12 rounded-3xl cursor-pointer border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
								Delete
							</button>
						</span>
					</div>
					<div className='bg-(--secondary-colour) border border-(--border-colour) w-full mt-6 px-6 py-4 rounded-3xl'>
						Promotional offers
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
