'use client';
import { useState } from 'react';
import Image from 'next/image';
import ProfilePic from '../../../public/icons/ProfilePic.png';

const SettingsPage = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isEditingAddress, setIsEditingAddress] = useState(false);

	const [info, setInfo] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
	});

	const [address, setAddress] = useState('');
	const [tempInfo, setTempInfo] = useState(info);
	const [tempAddress, setTempAddress] = useState(address);

	function handleEdit() {
		setTempInfo(info);
		setIsEditing(true);
	}

	function handleSave() {
		setInfo(tempInfo);
		setIsEditing(false);
	}

	function handleCancel() {
		setIsEditing(false);
	}

	function handleEditAddress() {
		setTempAddress(address);
		setIsEditingAddress(true);
	}

	function handleSaveAddress() {
		setAddress(tempAddress);
		setIsEditingAddress(false);
	}

	function handleDeleteAddress() {
		setAddress('');
		setIsEditingAddress(false);
	}

	const inputClass = `opacity-75 font-semibold bg-transparent outline-none w-full ${
		isEditing ? 'border-b border-(--primary-colour)' : 'cursor-default'
	}`;

	const inputClassAddress = `opacity-75 font-semibold bg-transparent outline-none w-full ${
		isEditingAddress ? 'border-b border-(--primary-colour)' : 'cursor-default'
	}`;

	return (
		<div className='flex flex-col gap-6'>
			<h1 className='text-3xl text-center font-bold'>Account Settings</h1>
			<div className='flex flex-col lg:flex-row items-center lg:items-start gap-12'>
				<div>
					<Image
						src={ProfilePic}
						alt='Profile Picture'
						className='size-48 rounded-full'
					/>
					<div className='left-12 w-48 h-10 bg-(--secondary-colour) rounded-full pl-8 pt-2 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
						Set Profile Picture
					</div>
				</div>

				<div className='bg-(--secondary-colour) w-full lg:w-[35%] px-6 py-4 rounded-3xl'>
					{[
						{
							label: 'Your name',
							key: 'name',
							placeholder: 'Steven',
							type: 'text',
						},
						{
							label: 'Your email',
							key: 'email',
							placeholder: 'user@gmail.com',
							type: 'email',
						},
						{
							label: 'Phone Number',
							key: 'phone',
							placeholder: '077 123 4567',
							type: 'tel',
						},
						{
							label: 'Password',
							key: 'password',
							placeholder: '****',
							type: 'password',
						},
					].map(({ label, key, placeholder, type }) => (
						<div
							key={key}
							className='w-full mt-3 mb-6 flex gap-2 py-3 px-4 whitespace-nowrap'>
							<span className='pt-1'>{label}</span>
							<div className='bg-white w-[80%] rounded-3xl p-2 pl-4 text-sm flex gap-2 items-center'>
								<input
									className={inputClass}
									type={type}
									placeholder={placeholder}
									value={isEditing ? tempInfo[key] : info[key]}
									readOnly={!isEditing}
									onChange={(e) =>
										setTempInfo({ ...tempInfo, [key]: e.target.value })
									}
								/>
							</div>
						</div>
					))}

					<div className='flex gap-3'>
						{isEditing ? (
							<>
								<button
									onClick={handleSave}
									className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
									Save
								</button>
								<button
									onClick={handleCancel}
									className='bg-(--secondary-colour) border text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
									Cancel
								</button>
							</>
						) : (
							<button
								onClick={handleEdit}
								className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
								Edit
							</button>
						)}
					</div>
				</div>
				<div className='flex flex-col w-full lg:flex-1'>
					<div className='bg-(--secondary-colour) w-full px-6 py-4 rounded-3xl'>
						<div className='w-full mt-3 mb-6 flex gap-2 py-3 px-4'>
							<span className='pt-1 whitespace-nowrap'>
								Saved default delivery address
							</span>
							<div className='bg-white w-[80%] rounded-3xl p-2 pl-4 text-sm flex gap-2 items-center'>
								<input
									className={inputClassAddress}
									type='text'
									placeholder='10/F Main Campus'
									value={isEditingAddress ? tempAddress : address}
									readOnly={!isEditingAddress}
									onChange={(e) => setTempAddress(e.target.value)}
								/>
							</div>
						</div>

						<span className='flex gap-4 items-center'>
							{isEditingAddress ? (
								<>
									<button
										onClick={handleSaveAddress}
										className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
										Save
									</button>
									<button
										onClick={() => setIsEditingAddress(false)}
										className='bg-(--secondary-colour) border text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
										Cancel
									</button>
								</>
							) : (
								<>
									<button
										onClick={handleEditAddress}
										className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
										Edit
									</button>
									<button
										onClick={handleDeleteAddress}
										className='bg-(--primary-colour) text-black mt-6 w-40 h-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
										Delete
									</button>
								</>
							)}
						</span>
					</div>

					<div className='bg-(--secondary-colour) w-full mt-6 px-6 py-4 rounded-3xl'>
						Promotional offers
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
