import { FC } from "react";
import gitHubIcon from '../assets/icon-github.svg';
import linkIcon from '../assets/icon-link.png';
import Anchor from "./Anchor";
import Skill from "./Skill";

interface CardProps {
  imgSrc: string;
  title: string;
  skills:string[];
  url_code: string;
  url_deploy?: string;
}

const Card: FC<CardProps> = ({ imgSrc, title, skills, url_code, url_deploy }) => {
  return (
      <div
        className="group flex flex-col py-12 px-8 relative bg-accent
        hover:bg-hoverPrimary xs:h-[290px] h-[210px] sm:min-w-[330px] min-w-fit max-w-[448px]
        cursor-pointer rounded-2xl transition-all ease-in-out duration-700
     "
      >
        <div
        className="flex justify-center items-center"
        >
        <img
          src={imgSrc}
          alt={title}
          className="max-h-[170px] backdrop-blur-0 rounded-md group-hover:scale-105 
                transition-all duration-700 ease-in-out"
        />
        <h6 className="text-center text-base text-textPrimary w-full px-8 sm:text-lg 
            absolute -top-12 left-1/2 z-10 first-letter:capitalize
            opacity-0 group-hover:opacity-100 group-hover:top-1
            -translate-x-1/2 transition-all duration-700 ease-in-out 
            [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]"
        >
          {title}
        </h6>
        <div className="flex absolute -top-30 left-1/5 z-10
              opacity-0 group-hover:opacity-100 group-hover:top-17
              transition-all duration-700 ease-in-out ">
          { skills.map( ( skill, i ) => <Skill key={i}> {skill} </Skill>) }
        </div>
        </div>

      <div className="flex mt-4 justify-evenly w-full sm:flex-row">
        <Anchor href={url_code} icon={gitHubIcon}/>
        {
          url_deploy && <Anchor href={url_deploy} icon={linkIcon}/>
        }
      </div>
      </div>
  );
};

export default Card;
