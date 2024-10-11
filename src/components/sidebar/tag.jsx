import { useAppContext } from "../../context/app-context";

const TagItem = ({ label }) => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`${isMenuItemCollapsed ? 'py-2 text-center hidden md:block' : 'px-8 py-2 '}`} >
            <p className="text-xs text-gray-600 font-semibold opacity-70 truncate" >{label}</p>
        </div>
    )
}



export default TagItem;