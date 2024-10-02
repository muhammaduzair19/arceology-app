import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

const SidebarLink = ({ to, icon: Icon, label, isCollapsed, }) => {
    const { setIsSidebarCollapsed } = useAppContext();

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsSidebarCollapsed(true);
        }
    };

    return (
        <Link
            onClick={handleLinkClick}
            to={to}>
            <div
                className={`cursor-pointer flex items-center  transition-all ease-in-out  duration-100
                    ${isCollapsed ? 'justify-center py-2' : 'justify-start px-8 py-2'}
                     hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors `}>

                <Icon className="w-5 h-5 !text-gray-700" strokeWidth={1} />
                <span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-xs text-gray-700`} >
                    {label}
                </span>

            </div>
        </Link>
    )
}


export default SidebarLink;