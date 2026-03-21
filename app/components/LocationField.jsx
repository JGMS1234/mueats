import LocationIcon from '../../public/icons/locationIcon.svg';
import DropDown from '../../public/icons/dropDown.svg';
import Image from 'next/image';

const LocationField = () => {
	return (
		<div className='flex gap-2 relative rounded-4xl items-center py-2 px-4 bg-(--primary-colour) cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
			<span className='size-8'></span>
			<Image
				src={LocationIcon}
				alt='Location Icon'
				className='size-12 absolute bottom-[50%] left-2 translate-y-[50%]'
			/>
			<div className='bg-(--secondary-colour) rounded-3xl p-2 text-sm flex gap-2 items-center'>
				<span className='opacity-75 font-semibold'>10/F Main Campus</span>
				<Image
					src={DropDown}
					alt='Drop Down Icon'
					className='size-6'
				/>
			</div>
		</div>
	);
};

export default LocationField;
