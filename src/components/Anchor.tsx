import { FC, ReactNode } from "react";

interface AnchorProps {
    href: string,
    icon?: string;
    children?: ReactNode;
}

const Anchor: FC<AnchorProps> = ({ children, icon, href }) => {
    return (
        <a className={`${icon && `px-2.5 py-2.5` }
         items-center  bg-accent hover:bg-hoverPrimary
            border border-secondary/30 hover:border-secondary/75 rounded-full
            transition-all ease-linear duration-300 relative w-fit`}
            href={href} target="_blank" rel="noreferrer"
        >
     {children || <img src={icon} alt="" className="h-4 w-4 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]" />}
        </a>
    );
};

export default Anchor;
