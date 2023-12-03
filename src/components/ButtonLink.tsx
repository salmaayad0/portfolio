import { FC, ReactNode } from 'react'

interface LinkProps {
    children: ReactNode;
    href: string;
    target?: string;
    rel?: string;
    download?: string;
    secondary?: boolean;
    icon?: string;
}

const ButtonLink: FC<LinkProps> = ({ children, href, target, rel, download, secondary, icon }) => {
  return (
    <a
      className={`${secondary ? 'bg-secondary hover:bg-hoverSecondary' : 'bg-accent hover:bg-hoverPrimary'}

      transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base
      sm:text-lg text-bold relative w-full sm:w-fit
     `}
      href={href} rel={rel} target={target} download={download}
    >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <img src={icon} alt="download-cv" />
        </div>
      ) : (<p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>)
      }
    </a>
  )
}

export default ButtonLink