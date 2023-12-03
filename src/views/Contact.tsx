import contactPageImg from "../assets/contact-view.jpg";
import contactIllustration from "../assets/contact-illustration.png";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="max-w-screen-xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-10 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex flex-1 flex-col gap-4">
          <motion.h4
            initial='hidden'
            variants={fadeIn('down')}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: true }}
            className="text-center xl:text-start text-xl sm:text-3xl lg:text-[52px] 
              font-bold text-textPrimary"
          >
            Contact{' '}<span className="text-secondary">Me</span>
          </motion.h4>

          <motion.img
            initial='hidden'
            variants={scale()}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: false }}
            src={contactIllustration} 
            alt="contact me" 
            // className="max-h-[320px]" 
          />
        </div>
        <ContactForm />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </section>
  );
};

export default Contact;
