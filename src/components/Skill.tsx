import { FC, ReactNode } from 'react'

interface skillProps {
    children: ReactNode;
}

const Skill: FC<skillProps> = ({ children }) => {
  return (
    <div
      className='py-1.5 px-1.5 mx-1 rounded-full text-textSecondary 
       flex items-center text-center
        text-xs text-bold w-full sm:w-fit bg-accent border border-secondary/80'
    >
    <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)] ">{children}</p>
    </div>
  )
}

export default Skill