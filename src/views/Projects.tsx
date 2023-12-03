import { useState } from "react";
import projectsPageImg from "../assets/projects-view.webp";
import { Button, Card } from "../components";
import { projects } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";


type category = 'front-end' | 'back-end'

const Projects = () => {
  const [selectedCat, setSelecedCat] = useState<category>('front-end');

  const selectedProject = () =>{
    if (selectedCat === 'front-end')
      return projects.filter(project => project.category === 'front-end')
    else
      return projects.filter(project => project.category === 'back-end')
  }

  return (
    <section
      id="projects"
      className="flex items-center justify-center relative min-h-screen"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div
      className="max-w-screen-2xl w-full py-16 px-12 mx-auto"
      >
        <div className="flex flex-1 flex-col gap-4">
          <h2
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
         font-bold text-secondary"
          >
            My{' '}
            <span className="text-textPrimary">Projects</span>
          </h2>
          <motion.div 
            initial='hidden'
            variants={fadeIn('down')}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: true }}
           className="flex flex-col gap-4 justify-center items-center sm:flex-row xl:justify-start"
          >
            <Button 
             secondary={selectedCat==='front-end' && true }
             onClick={() => setSelecedCat('front-end')}
            >
              front-end
            </Button>
            <Button 
             secondary={selectedCat === 'back-end' && true}
              onClick={() => setSelecedCat('back-end')}
            >
              back-end
            </Button>
          </motion.div>
          <motion.div
            initial='hidden'
            variants={fadeIn('up')}
            transition={transition()}
            whileInView='visible'
            viewport={{ once: true }}
           className="flex flex-wrap gap-12 mt-12 justify-center"
          >
            {
              selectedProject().map(project => 
              <Card 
                key={project.id}
               imgSrc={project.img} 
               title={project.title}
               url_code={project.url_code}
               url_deploy={project.url_deploy}
               skills={project.skills} 
              />
              )
            }
          </motion.div>

        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </section>
  );
};

export default Projects;
