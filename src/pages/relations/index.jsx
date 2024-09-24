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



const Relations = () => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`${isMenuItemCollapsed ? 'w-0 md:w-20' : 'w-60'} bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}>
            <Link to={'/menu-item'} className={`text-gray-600/80 text-xs px-3 font-semibold flex gap-1 items-center mt-2 ${isMenuItemCollapsed ? 'hidden md:flex' : 'flex'}`} >
                <ChevronLeft strokeWidth={1.5} className="w-4 h-4 text-gray-600/80" />
                Relations
            </Link>
            <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>
                <form className="flex flex-col px-3 mt-4 gap-2">

                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="relate-to-layer">Relate to layer</label>
                        <select name="relate-to-layer" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                            <option value={1} >Context 1</option>
                            <option value={2}  >Context 2</option>
                        </select>
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="position">Position</label>
                        <select name="position" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                            <option value={"Below"}>Below</option>
                            <option value={"Above"}>Above</option>
                            <option value={"Next to"}>Next to</option>
                            <option value={"After"}>After</option>
                            <option value={"Before"}>Before</option>
                            <option value={"Coeval with"}>Coeval with</option>
                            <option value={"Belongs to"}>Belongs to</option>
                            <option value={"Includes"}>Includes</option>
                        </select>
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="reference">Reference</label>
                        <select name="reference" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                            <option value={"Untyped"} >Untyped</option>
                            <option value={"Section"} >Section</option>
                            <option value={"Feature"} >Feature</option>
                            <option value={"Context"} >Context</option>
                            <option value={"Object"} >Object</option>
                            <option value={"Image"} >Image</option>
                            <option value={"Drawing"} >Drawing</option>
                            <option value={"Lot"} >Lot</option>
                            <option value={"Other"} >Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col text-xs text-gray-600" >
                        <label htmlFor="feature">Feature</label>
                        <select name="feature" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                            <option value={"Structure"} >Structure</option>
                            <option value={"Test"} >Test</option>
                        </select>
                    </div>


                </form>

            </div>

        </div>
    )
}

export default Relations;