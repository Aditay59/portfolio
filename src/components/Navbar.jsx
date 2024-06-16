// import Spline from '@splinetool/react-spline';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa'
import Spline from '@splinetool/react-spline'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
       
        <div className="w-[120px] h-[120px]">
          <Spline scene="https://prod.spline.design/scsHY-6FUBHVQdij/scene.splinecode" />
        </div>

        <div className="m-8 flex items-cenetr justify-center gap-4 text-2xl">
          <a href='https://linkedin.com/in/aditayChaudhary' target='_blank' > <FaLinkedin className='cursor-pointer hover:text-blue-500'/> </a>
          <a href='https://github.com/Aditay59' target='_blank'> <FaGithub className='cursor-pointer hover:text-slate-500'/> </a>
          <a href='https://www.instagram.com/aditay0_0' target='_blank'> <FaInstagram className='cursor-pointer hover:text-pink-400'/> </a>
        </div>
    
    </nav>
  )
}

export default Navbar;
