import { FC, ReactNode } from "react";

interface NotificationProps {
    children: ReactNode;
    triger: boolean;
    color: 'green' | 'red'
    handleClose: () => void;
}

const Notification: FC<NotificationProps> = ({ children, triger, color, handleClose }) => {

    return (
        (triger) ? (
            <div className="fixed top-1.5 left-1/3 w-1/4 dark:bg-gray-800 rounded-xl
                      p-4 mb-4">
                <div className={`text-sm text-${color}-800 rounded-lg bg-${color}-50
                    dark:text-${color}-400 relative dark:bg-gray-800 text-center`} role="alert">
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