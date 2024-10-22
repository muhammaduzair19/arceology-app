import { Bell, ChevronDown, Menu, Settings } from "lucide-react";
import { useAppContext } from "../../context/app-context";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { isSidebarCollapsed, setIsSidebarCollapsed, trench } =
        useAppContext();
    const [dropdownMenu, setDropdownMenu] = useState(false);

    return (
        <div className="w-full h-12 bg-white shadow-md flex sticky top-0 z-20">
            <div className="flex items-center gap-3 w-64 h-full px-5">
                {/* LOGO  */}
                <span className="w-6 h-6 bg-gray-500 rounded-full " />
                <h1 className="text-xl font-bold font-serif">
                    {trench ? trench : ""}
                </h1>
            </div>
            <div className="w-full px-5 flex items-center justify-between">
                <button
                    className="p-2 transition-colors rounded-full hover:bg-gray-100"
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                >
                    <Menu className="w-5 h-5" strokeWidth={1} />
                </button>
                <div className="flex items-center gap-2">
                    <button className="p-2 transition-colors rounded-full hidden md:block hover:bg-gray-100">
                        <Bell className="w-5 h-5" strokeWidth={1} />
                    </button>
                    <button className="p-2 transition-colors rounded-full hidden md:block hover:bg-gray-100">
                        <Settings className="w-5 h-5" strokeWidth={1} />
                    </button>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="w-8 h-8 p-2 bg-purple-800 rounded-full flex justify-center items-center text-sm text-white">
                            P
                        </span>
                        <p>Person Ispum</p>
                    </div>
                    <button
                        onClick={() => setDropdownMenu(!dropdownMenu)}
                        className="p-2 block md:hidden transition-colors rounded-full hover:bg-gray-100"
                    >
                        <ChevronDown className="w-5 h-5" strokeWidth={1} />
                    </button>
                </div>
            </div>
            {dropdownMenu && (
                <div className="absolute flex flex-col md:hidden transition-all ease-linear bg-white right-0 top-10 px-3 mx-3 rounded-sm py-2">
                    <button className="p-2 transition-colors rounded-full flex text-xs items-center gap-2 hover:bg-gray-100">
                        <Bell className="w-4 h-4" strokeWidth={1} />
                        <p>Notifications</p>
                    </button>
                    <button className="p-2 transition-colors rounded-full flex text-xs items-center gap-2 hover:bg-gray-100">
                        <Settings className="w-4 h-4" strokeWidth={1} />
                        <p>Settings</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
