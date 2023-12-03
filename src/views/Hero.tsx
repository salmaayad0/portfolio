import homePageImg from "../assets/main-view.jpg";
import homePageIllustation from "../assets/hero-illustration.png";
import downloadIcon from "../assets/download-btn-icon.svg";
import ButtonLink from "../components/ButtonLink";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const url_CV = window.location.origin+'/salmaAyad.pdf'

const Hero = () => {

  return (
    <section 
      id="hero" 
      className="flex items-center justify-center relative min-h-screen"
      style={{
        background: `url(${homePageImg})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
      }}
      >
      <div 
        className={`max-w-screen-2xl flex flex-col 
           xl:flex-row xl:justify-between xl:items-start items-center
           gap-12 py-16 px-10 w-full `}
      ><div className="w-full xl:w-fit mb-6">
            <motion.h1
             initial='hidden'
             variants={fadeIn('down')}
             transition={transition()}
             whileInView='visible'
             viewport={{once: true}}
             className={`w-full xl:w-fit text-center xl:text-start text-3xl sm:text-5xl
               lg:text-7xl font-bolt text-textPrimary mb-2
            `}
            >Salma Ayad<br/>
            <span className="text-secondary text-l sm:text-xl lg:text-3xl">
                <Typewriter 
                words={['Software Engineer', 'Front-end Developer', 'Back-end Developer']}
                cursor cursorStyle="_"
                typeSpeed={270} deleteSpeed={170}
                loop
                />
              </span>
            </motion.h1>
            <motion.div
             initial='hidden'
             variants={fadeIn('up')}
             transition={transition()}
             whileInView='visible'
             viewport={{ once: true }}
             className="flex flex-col sm:flex-row items-center gap-6 justify-center 
              xl:justify-center my-20"
            >
            <ButtonLink 
              href="mailto:salmaayad017@gmail.com?subject = From your portfolio&body = Are you available for immediate hiring"
              target="_blank" rel="noreferrer" secondary>
                Hire Me
            </ButtonLink>

            <ButtonLink
                href={url_CV}
                download='salmaAyad_CV'
                icon={downloadIcon}
              >
               Download CV
              </ButtonLink>

            </motion.div>
          </div>
          <motion.img 
           initial='hidden'
           variants={scale()}
           transition={transition()}
           whileInView='visible'
           viewport={{ once: false }}
           src={homePageIllustation} 
           alt="love coding" 
           className="max-w-full sm:max-w-[401px]" 
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"/>
    </section>
  );
};

export default Hero;
