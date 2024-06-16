
import profile from '../assets/profile.png';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        initial={{x: -100, opacity: 0}}
                        animate={ {x: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aditay</motion.h1>
                    
                    <motion.span
                        initial={{x: -100, opacity: 0}}
                        animate={ {x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
                        dragConstraints={{left: -100, right: 100}}
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Aspiring Developer</motion.span>
                    
                    <motion.p 
                        initial={{x: -100, opacity: 0}}
                        animate={ {x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 1}}
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        
                        I&apos;m a tech enthusiast with a Bachelor&apos;s in Computer Science,
                        Passionate about creating user-friendly sites with dedication.
                        With a commitment to quality and precision,
                        I strive to make an impact with strong ambition.
                        Driven by curiosity, I constantly seek to learn and grow,
                        Embracing new technologies to stay ahead in this ever-changing
                        flow.
                    
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration:1, delay: 1.2}}
                        src={profile} alt='profile' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;