import { CONTACT } from "../constants";
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-col items-center justify-center " >
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
          className="my-10 text-center text-4xl ">Get in Touch</motion.h1>
        <div className="text-ceter tracking-tighter flex flex-col items-center justify-center ">
            <motion.a
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              href={`tel:${CONTACT.phoneNo}`} className="my-4">{CONTACT.phoneNo}</motion.a> 
            <motion.a 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact;