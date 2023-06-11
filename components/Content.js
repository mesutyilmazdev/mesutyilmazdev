import Link from "next/link";
import 'tippy.js/dist/tippy.css'
import 'animate.css'

const Content = () => {
  return (
  <div className="flex flex-col mx-auto items-center">
        <div className='mb-5 animate__animated animate__slideInDown animate__delay-.5s'>
          <Link href="mailto:info@mesutyilmaz.dev" passHref>
          <a className='flex text-xl text-white hover:underline decoration-gray-900 decoration-wavy ease-in-out duration-300'>
          <i className='bi bi-envelope-paper-heart mr-2'/>info@mesutyilmaz.dev</a>
          </Link>
        </div>

        <div className='animate__animated animate__slideInDown animate__delay-.5s'>
          <Link href='https://medium.com/@mesutyilmazdev' passHref>
          <a rel="noreferrer" target="_blank" className='flex py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-md shadow-2xl ease-in-out duration-300'> <i className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg></i> Blog</a>
        </Link>
        </div> 
  </div>
  );
};

export default Content;
