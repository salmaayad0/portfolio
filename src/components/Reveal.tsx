import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return(
    <div className="relative">
      <motion.div
       variants={{
        hidden: {
          opacity:0
        },
        visible:{
          opacity:1
        },
       }}
       initial='hidden'
       whileInView='visible'
       viewport={{once: true}}
        transition={{
          duration: 0.725,
          delay: 0.2,
          ease: 'easeIn',
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            left: 0
          },
          visible: {
            left: '100%'
          },
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{
          duration: 0.725,
          ease: 'easeIn',
        }}
        className="absolute inset-0 bg-accent/90 z-10"
      >

      </motion.div>
    </div>
  );
};

export default Reveal;
