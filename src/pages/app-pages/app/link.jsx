import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/app-context";

const MenuLink = ({ to, id, label, isCollapsed, }) => {
    const { setIsMenuItemCollapsed } = useAppContext();

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsMenuItemCollapsed(true);
        }
    };

    return (
        <Link
            title={label}
            className={`flex items-center justify-between hover:text-gray-500 hover:bg-blue-100 transition-colors  ${isCollapsed ? 'justify-center px-2 py-1.5' : 'justify-start px-4 py-1.5'}`}
            onClick={handleLinkClick}
            to={to}

        >
            <div
                className={`cursor-pointer gap-3 flex items-center  transition-all ease-in  duration-300`}
            >

                <span className="w-7 h-7 bg-gray-200 rounded-full text-xs flex font-semibold text-gray-800/60 justify-center items-center">
                    {id + 1}
                </span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} font-semibold text-xs text-gray-800/80`} >
                    {label}
                </span>

            </div>
            <div>
                <ChevronRight className="w-4 h-4 text-gray-800/80" />
            </div>
        </Link>
    )
}


export default MenuLink