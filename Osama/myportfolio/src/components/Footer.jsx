import Foooter from '../assets/img/foooter.jpg'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div>
            <footer className='bg-black lg:grid lg:grid-cols-5'>
                <div className='relative block h-32 lg:col-span-2 lg:h-full'>
                    <img
                        src={Foooter}
                        alt='Footer'
                        className='absolute inset-0 h-full w-full object-cover'
                    />
                </div>

                <div className='px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8'>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
                        <div>
                            <div>
                                <p className='text-yellow-500 font-medium text-primaryColor-gold'>
                                    Call us
                                </p>

                                <a className='block text-2xl font-medium text-gray-100 mt-6 dark:text-white sm:text-3xl'>
                                    +212-634-75-25-71
                                </a>
                            </div>

                            <ul className='mt-8 space-y-1 text-sm text-gray-100 dark:text-gray-100'>
                                <li>Monday to Friday: 10am - 6pm</li>
                            </ul>
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div>
                                <p className='text-yellow-500 font-medium text-primaryColor-gold'>
                                    Navigate
                                </p>

                                <ul className='mt-6 space-y-4 text-sm'>
                                <Link to="Home" smooth={true} duration={500}>

                                    <li
                                            className='text-gray-100 cursor-pointer transition dark:text-gray-200 hover:text-primaryColor-gold hover:underline'
                                        >
                                            Home{' '}
                                    </li>
                                    </Link>
                                    <Link to="Projects" smooth={true} duration={500}>

                                    <li
                                            className='text-gray-100 mt-4 cursor-pointer transition dark:text-gray-200 hover:text-primaryColor-gold hover:underline'
                                        >
                                            Projects{' '}
                                    </li>
                                    </Link>
                                </ul>
                            </div>

                            <div>
                                <p className='text-yellow-500 font-medium text-primaryColor-gold'>
                                    Explore
                                </p>

                                <ul className='mt-6 space-y-4 text-sm'>
                                <Link to="Home" smooth={true} duration={500}>

                                    <li
                                            className='text-gray-100 cursor-pointer transition dark:text-gray-200 hover:text-primaryColor-gold hover:underline'
                                            to='/about'
                                        >
                                            About Me{' '}
                                    </li>
                                    </Link>
                                    <Link to="Contact" smooth={true} duration={500}>

                                    <li
                                            className='text-gray-100 mt-4 cursor-pointer transition dark:text-gray-200 hover:text-primaryColor-gold hover:underline'
                                            to='/contact'
                                        >
                                            Contact Us{' '}
                                    </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 border-t border-gray-100 pt-12 dark:border-gray-800'>
                        <div className='sm:flex sm:items-center sm:justify-between'>
                           

                            <p className='mt-8 text-xs text-gray-400 dark:text-gray-400 sm:mt-0'>
                                &copy; 2023. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
