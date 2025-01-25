import Link from "next/link";
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css'
import 'animate.css'

const Footer = () => {
  return (
  
<div className='fixed bottom-0 text-sm text-center mb-4'>
        <Link href="https://www.twitter.com/mesutyilmazdev" passHref>
          <Tippy content="Twitter">
            <a href="https://www.twitter.com/mesutyilmazdev" rel="noreferrer" target="_blank"><i className='bi bi-twitter text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

        <Link href="https://www.instagram.com/mesutyilmazdev" passHref>
          <Tippy content="İnstagram">
            <a href="https://www.instagram.com/mesutyilmazdev" rel="noreferrer" target="_blank"><i className='bi bi-instagram text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

        <Link href="https://www.youtube.com/channel/UCatbgDblHcN_X8gUDaImvcw" passHref>
          <Tippy content="Youtube">
            <a href="https://www.youtube.com/channel/UCatbgDblHcN_X8gUDaImvcw" rel="noreferrer" target="_blank"><i className='bi bi-youtube text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

        <Link href="https://www.behance.net/mesutyilmazdev" passHref>
          <Tippy content="Behance">
            <a href="https://www.behance.net/mesutyilmazdev" rel="noreferrer" target="_blank"><i className='bi bi-behance text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

        <Link href="https://www.linkedin.com/in/mesutyilmazdev/" passHref>
          <Tippy content="Linkedin">
            <a href="https://www.linkedin.com/in/mesutyilmazdev/" rel="noreferrer" target="_blank"><i className='bi bi-linkedin text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

        <Link href="https://www.github.com/mesutyilmazdev" passHref>
          <Tippy content="Github">
            <a href="https://www.github.com/mesutyilmazdev" rel="noreferrer" target="_blank"><i className='bi bi-github text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-[#273767] focus:ring-4 rounded-full p-3 inline-flex items-center m-2 cursor-pointer ease-in-out duration-300' /></a>
          </Tippy>
        </Link>

      </div>

  );
};

export default Footer;
