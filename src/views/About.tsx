import aboutPageImg from "../assets/about-view.jpg";
import aboutIllustration from "../assets/about-illustration.png";
import facebookIcon from "../assets/icon-facebook.svg";
import linkedInIcon from "../assets/icon-linkedin.svg";
import gitHubIcon from "../assets/icon-github.svg";
import whatAppIcon from "../assets/icon-whatsapp.svg";
import { SocialMediaIcon, Reveal } from "../components";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import Anchor from "../components/Anchor";


const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center relative min-h-screen"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between 
      items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                  font-bold text-textPrimary"
            >
              About{' '}
              <span className="text-secondary">Me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              A software engineer possesses strong knowledge of programming in{' '}
              <span className="text-textPrimary">
                Python, JavaScript, React, Django, Odoo, Databases SQL, and PostgreSQL.
              </span><br />
              Seeking a position for innovative, Dynamic, Agile, Organized Workplace
              that can recognize my technical skills in addition to my business skills such as{' '}
              <span className="text-textPrimary">
                Collaboration, Adaptability, Effective communication, and time management.
              </span><br />
              it's all proven skills as I worked as a sales biomedical engineer for the past two years full-time job,
              and as a freelance Content Creator-Copy Writer with a robust customer network for over 3 years part-time remote job.
            </p>
          </Reveal>

          <motion.div
            initial='hidden'
            variants={fadeIn('up')}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: true }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <Anchor
              href="https://www.linkedin.com/in/salmaayad7/"
            >
              <SocialMediaIcon title="linkin" imgSrc={linkedInIcon} />
            </Anchor>
            <Anchor
              href="https://github.com/salmaayad0"
            >
              <SocialMediaIcon title="github" imgSrc={gitHubIcon} />
            </Anchor>
            <Anchor
              href="https://web.facebook.com/salma.purple.90/"
            >
              <SocialMediaIcon title="facebook" imgSrc={facebookIcon} />
            </Anchor>
            <Anchor
              href="https://api.whatsapp.com/send?phone=+201019070110&text=Hi Salma from your portfolio" 
            >
              <SocialMediaIcon title="whatsapp" imgSrc={whatAppIcon} /> 
            </Anchor>
          </motion.div>

        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            src={aboutIllustration}
            alt="know me more"
            className="max-w-full sm:max-w-[401px]"
            initial='hidden'
            variants={scale()}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: false }}
          />
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </section>
  );
};

export default About;
