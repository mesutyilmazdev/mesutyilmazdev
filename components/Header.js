import Image from "next/image";
import logo from '../public/mesutyilmaz-logo.svg'

const Header = () => {
  return (
  <div className="flex flex-col mx-auto items-center mt-10">
    <div className="mb-7">
      <Image src={logo} className='animate__animated animate__slideInUp animate__delay-.5s' alt="Logo" width={120} height={120}/>
    </div>

    <div className='mb-10 text-center mx-auto'>
          <h1 className='text-white text-5xl mb-2 animate__animated animate__slideInUp animate__delay-.5s'>Mesut Yılmaz</h1>
          <h2 className='text-slate-300 text-2xl font-thin animate__animated animate__slideInUp animate__delay-.5s'>full stack developer & designer</h2>
    </div>
  </div>
  )
};

export default Header;
