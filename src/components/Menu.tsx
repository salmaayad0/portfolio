import { IconButton, Tooltip } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";

import { Link } from "react-scroll";

const Menu = () => {

  return (
    <nav className="fixed bottom-0 sm:bottom-10 w-full sm:w-fit left-1/2 -translate-x-1/2 
         bg-accent rounded-t-xl sm:rounded-full py-2 px-5 flex justify-around sm:justify-center gap-10 z-30"
    >
      <Link to="hero" smooth>
        <Tooltip title="CV" placeholder="top" arrow>
          <IconButton className="group">
            <HomeIcon className="text-white group-hover:text-secondary"/>
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="about" smooth>
        <Tooltip title="about" placeholder="top" arrow>
          <IconButton className="group">
            <PersonIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="projects" smooth>
        <Tooltip title="Projects" placeholder="top" arrow>
          <IconButton className="group">
            <AppsIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="contact" smooth>
        <Tooltip title="Email-me" placeholder="top" arrow>
          <IconButton className="group">
            <MailIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>
          
    </nav>
  );
};

export default Menu;
