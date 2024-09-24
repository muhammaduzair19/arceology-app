import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context"
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";



const TagItem = ({ label }) => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`my-1 ${isMenuItemCollapsed ? ' text-center hidden md:block' : ''}`} >
            <p className="text-xs text-gray-600/70 font-semibold opacity-70 truncate " >{label}</p>
        </div>
    )
}



const Features = () => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`${isMenuItemCollapsed ? 'w-0 md:w-20' : 'w-60'} bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}>
            <Link to={'/menu-item'} className={`text-gray-600/80 text-xs px-3 font-semibold flex gap-1 items-center mt-2 ${isMenuItemCollapsed ? 'hidden md:flex' : 'flex'}`} >
                <ChevronLeft strokeWidth={1.5} className="w-4 h-4 text-gray-600/80" />
                Feature
            </Link>
            <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>
                <form className="flex flex-col px-3 mt-4 gap-2">
                    <TagItem label={'General'} />
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="trench">Trench</label>
                        <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="type">Type</label>
                        <select name="type" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                            <option value={1} >1</option>
                            <option value={2}  >2</option>
                        </select>
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="trench">Number</label>
                        <input type="number" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="title">Title</label>
                        <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="start">Start</label>
                        <input type="datetime-local" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="end">End</label>
                        <input type="datetime-local" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                    </div>
                    <TagItem label={'Points'} />
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="outline">Outline</label>
                        <div className="mt-1 overflow-hidden  rounded-sm md:rounded-[4px] border border-gray-300 bg-white flex items-center justify-center py-3 px-2" >
                            <span className={`${isMenuItemCollapsed ? 'hidden' : 'block'} bg-gray-200 p-2 rounded-full flex justify-center items-center`} >
                                <Trash className={`w-3 h-3 `} />
                            </span>
                            <input type="text" className="w-full h-full py-1 px-2 focus:outline-none" placeholder="Polygon, 46 points" />
                            <span>
                                <ChevronRight className="w-3 h-3" />
                            </span>
                        </div>
                        <button
                            className="w-full bg-blue-900 text-white py-1 rounded-full mt-2 flex justify-center gap-2"
                        >
                            <span>New</span>
                            <span className={`${isMenuItemCollapsed ? 'hidden' : 'block'}`} >Outline</span>
                        </button>
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="description">Description</label>
                        <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="content">Content</label>
                        <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                    </div>
                    <div className="w-full flex justify-between text-xs gap-1 mt-3" >
                        <button className="px-2 w-full bg-gray-300 text-gray-700 py-1.5 rounded-[4px]" >Cancel</button>
                        <button className="px-2 w-full bg-blue-700 text-white py-1.5 rounded-[4px]" >Done</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Features;