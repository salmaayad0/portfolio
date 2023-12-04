import { FC, ReactNode } from "react";

interface NotificationProps {
    children: ReactNode;
    triger: boolean;
    color?: boolean
    handleClose: () => void;
}

const Notification: FC<NotificationProps> = ({ children, triger, color, handleClose }) => {

    return (
        (triger) ? (
            <div className="fixed top-1.5 left-0 w-full md:w-1/2 md:left-1/4 lg:w-1/4 lg:left-1/3
                    dark:bg-gray-800 rounded-xl p-4 mb-4">
                <div 
                className={`${color ? 'text-red-800 bg-red-50 dark:text-red-400 ':
                  ' text-green-800 bg-green-50 dark:text-green-400 '}  
                   ' text-sm  rounded-lg  relative dark:bg-gray-800 text-center '`} role="alert">
                    <span className="font-medium">{children}</span>
                </div>
                <button className="absolute top-0 right-2 rounded-full p-2 text-red-700 
                       font-semibold [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]"
                    onClick={handleClose}
                >
                    X
                </button>
            </div >
        ) : (<div className="hidden"></div>)

    )
}

export default Notification