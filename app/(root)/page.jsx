import SearchBar from '../components/SearchBar';
import Reorder from '../components/Reorder';
import EditorsChoice from '../components/EditorsChoice';
import Image from 'next/image';
import ShowMoreBtn from '../../public/icons/showMore.svg';

export default function Home() {
	return (
		<div className='flex flex-col gap-6 h-full'>
			<div className='flex flex-col items-center gap-4 pt-2'>
				<h1 className='font-bold text-xl lg:text-2xl text-center'>
					Welcome to MU's #1 food-ordering app
				</h1>
				<p>
					Your go-to app for ordering from MU's various canteens for pickup or
					delivery. Look below for suggested dishes, or head over to the
					Restaurants tab for more
				</p>
			</div>
			<span className='w-full lg:w-[30vw]'>
				<SearchBar />
			</span>
			<div className='flex flex-col gap-2 overflow-y-auto'>
				<div className='flex flex-col gap-6 w-full mb-6'>
					<div className='flex justify-between items-center px-2 cursor-pointer hover:bg-(--secondary-colour)/15 transition-all duration-200 ease-in-out'>
						<span>Quick reorder</span>
						<Image
							src={ShowMoreBtn}
							alt='show more'
							className='size-8'
						/>
					</div>
					<div className='w-full overflow-x-auto'>
						<Reorder />
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<div className='flex justify-between items-center px-2 cursor-pointer hover:bg-(--secondary-colour)/15 transition-all duration-200 ease-in-out'>
						<span>Editor's choice</span>
						<Image
							src={ShowMoreBtn}
							alt='show more'
							className='size-8'
						/>
					</div>
					<div className='w-full overflow-x-auto'>
						<EditorsChoice />
					</div>
				</div>
			</div>
		</div>
	);
}
