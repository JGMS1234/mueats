'use client';

import SearchBar from '@/app/components/SearchBar';
import Ebs from '../../../public/images/ebs.png';
import MuCafe from '../../../public/images/mucafe.png';
import SnackBar from '../../../public/images/snackbar.png';
import Jbl from '../../../public/images/JblClub.png';
import Image from 'next/image';
import ShowMoreBtn from '../../../public/icons/showMore.svg';
import Link from 'next/link';

const page = () => {
	return (
		<div className='flex flex-col h-full gap-6'>
			<span className='w-[30vw]'>
				<SearchBar />
			</span>
			<div className='flex flex-col flex-1 overflow-y-auto'>
				<div className='flex flex-col gap-6'>
					<div className='flex justify-between items-center cursor-pointer hover:bg-(--secondary-colour)/15 transition-all duration-200 ease-in-out'>
						<span>Main Campus</span>
						<Image
							src={ShowMoreBtn}
							alt='show more'
							className='size-8'
						/>
					</div>

					<div className='flex justify-between gap-8 overflow-x-auto mb-6'>
						<Link href='/products'>
							<div className='w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-100 scale-95 active:scale-95 transition-all duration-200 ease-in-out'>
								<Image
									src={Ebs}
									alt='Cafe Image'
									className='size-20 absolute left-6 rounded-2xl'
								/>
								<span className='pl-30 size-4'></span>
								<div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl text-sm'>
									<div className='flex align-items: center'>
										<span className='opacity-75 font-semibold'>
											Ebeneezer's Kebabs & Pizzeria
										</span>
									</div>
									<div className='mt-6 flex gap-2'>
										<span className='opacity-75 font-semibold'>
											Middle-Eastern & Indian Cuisine; Halal
										</span>
									</div>
								</div>
							</div>
						</Link>
						<Link href='/products'>
							<div className='w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-100 scale-95 active:scale-95 transition-all duration-200 ease-in-out'>
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
										<span className='opacity-75 font-semibold'>
											Coffee, sandwiches, desserts, salads, etc
										</span>
									</div>
								</div>
							</div>
						</Link>
						<Link href='/products'>
							<div className='w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-100 scale-95 active:scale-95 transition-all duration-200 ease-in-out'>
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
										<span className='opacity-75 font-semibold'>
											Taiwanese Snacks
										</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<div className='flex justify-between items-center cursor-pointer hover:bg-(--secondary-colour)/15 transition-all duration-200 ease-in-out'>
						<span>Jockey Club Campus</span>
						<Image
							src={ShowMoreBtn}
							alt='show more'
							className='size-8'
						/>
					</div>
					<Link href='/products'>
						<div className='w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour) cursor-pointer hover:scale-100 scale-95 active:scale-95 transition-all duration-200 ease-in-out'>
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
									<span className='opacity-75 font-semibold'>
										Hong Kong cuisine and Hong Kong-style Western cuisine
									</span>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default page;
