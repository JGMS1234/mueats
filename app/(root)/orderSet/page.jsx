import Logo from '../../../public/icons/icon.svg';
import Image from 'next/image';

const page = () => {
	return <div className='flex items-center justify-center'>
        <Image
            src={Logo}
            alt='Logo'>

        </Image>

        <div className='text-lg px-6 py-8 mb-12 rounded-3xl'>
            Thank you for using MU Eats.
            <br></br>
              Your order is being prepared and will be delivered soon!
            
        </div>
    </div>
};

export default page;
