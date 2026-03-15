import SearchItem from '../components/SearchItem';
import Reorder from '../components/Reorder';
import EditorsChoice from '../components/EditorsChoice';

export default function Home() {
	return (
		<div>
			<div className='flex flex-col items-center gap-4 h-full pt-2'>
				<h1 className='font-bold text-2xl'>
					Welcome to MU's #1 food-ordering app
				</h1>
				<p>
					Your go-to app for ordering from MU's various canteens for pickup or
					delivery. Look below for suggested dishes, or head over to the
					Restaurants tab for more
				</p>
				<div className='h-[80%]'></div>
			</div>
			<SearchItem />
			Quick reorder

			<Reorder />

			Editor's choice

			<EditorsChoice />
		</div>
	);
}
