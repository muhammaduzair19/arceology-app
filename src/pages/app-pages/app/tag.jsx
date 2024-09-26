import { useAppContext } from "../../../context/app-context";

const TagItem = ({ label }) => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`my-2 ${isMenuItemCollapsed ? ' text-center hidden md:block' : 'px-8'}`} >
            <p className="text-xs text-gray-600 font-semibold opacity-70 truncate " >{label}</p>
        </div>
    )
}

export default TagItem;