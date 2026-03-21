import Image from 'next/image';
import Cafe from '../../public/images/Cafe.png';

const Reorder = () => {
	return (
		<div className='w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer scale-95 hover:scale-100 active:scale-95 transition-all duration-200 ease-in-out'>
			<Image
				src={Cafe}
				alt='Cafe Image'
				className='size-20 absolute left-6 rounded-2xl'
			/>
			<span className='pl-30 size-4'></span>
			<div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
				<div className='flex align-items: center'>
					<span className='opacity-75 font-semibold'>
						Jockey Club Campus Canteen
					</span>
					<span className='pl-12 opacity-75 font-semibold'>HK$ 46.5</span>
				</div>
				<div className='mt-2'>
					<span className='opacity-40 font-semibold text-xs'>
						Ordered on 11 Mar 2026
					</span>
				</div>
				<div className='mt-2 flex gap-2'>
					<span className='opacity-75 font-semibold'>
						Ramen with gillette fried oysters in black garlic oil
					</span>
				</div>
			</div>
		</div>
	);
};

export default Reorder;
