import { Bell, ChevronDown, Menu, Pencil, Redo2, Settings, Tag, Undo2, X } from "lucide-react";
import { useAppContext } from "../../context/app-context";
import { useState } from "react";

const Navbar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const {
        isMenuItemCollapsed,
        setIsMenuItemCollapsed,
        isPencilSelect,
        setIsPencilSelect,
        handleRedo,
        lines,
        handleUndo,
        redoStack,
    } = useAppContext();

    const handlePencil = () => {
        setIsPencilSelect((prev) => !prev);
        setDropdownMenu(false);
    };

    

    return (
        <div className="w-full h-12 bg-white shadow-md flex sticky top-0 z-20">
            <div className="flex items-center justify-between gap-3 w-72 h-full pl-2 ">
                {/* LOGO  */}
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-500 rounded-full " />
                    <h1 className="text-xl font-bold font-serif">Archeolog</h1>
                </div>
                <button
                    className="p-2 transition-colors rounded-full hover:bg-gray-100"
                    onClick={() => setIsMenuItemCollapsed(!isMenuItemCollapsed)}
                >
                    {isMenuItemCollapsed ? (
                        <Menu className="w-5 h-5" strokeWidth={1} />
                    ) : (
                        <X className="w-5 h-5" strokeWidth={1} />
                    )}
                </button>
            </div>
            <div className="w-full px-5 flex items-center justify-between">
                <div className="px-2">
                    <h1 className="hidden md:text-lg font-bold truncat">La-Cella-Salou-Tarragona</h1>
                </div>

                <div className="flex items-center gap-2">
                    {isPencilSelect && (
                        <div className="flex items-center gap-4 fixed top-16 right-2">
                            <button
                                disabled={lines.length == 0 ? true : false}
                                className={`py-1 rounded-md px-2 md:px-4 ${
                                    lines.length === 0 ? "bg-gray-400 cursor-no-drop" : "bg-gray-300"
                                } `}
                                onClick={handleUndo}
                            >
                                <Undo2 strokeWidth={1} />
                            </button>
                            <button
                                disabled={redoStack.length === 0 ? true : false}
                                className={`py-1 rounded-md px-2 md:px-4 ${
                                    redoStack.length === 0 ? "bg-gray-400 cursor-no-drop" : "bg-gray-300"
                                }`}
                                onClick={handleRedo}
                            >
                                <Redo2 strokeWidth={1} />
                            </button>
                        </div>
                    )}
                    <button
                        onClick={handlePencil}
                        className={` ${
                            isPencilSelect && "bg-blue-400 font-bold"
                        } p-2 transition-colors rounded-full hidden md:block hover:bg-gray-100`}
                    >
                        <Pencil className="w-5 h-5" strokeWidth={1} />
                    </button>
                    <button className="p-2 transition-colors rounded-full hidden md:block hover:bg-gray-100">
                        <Tag className="w-5 h-5" strokeWidth={1} />
                    </button>
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
                    <button
                        onClick={handlePencil}
                        className={`${
                            isPencilSelect && "bg-blue-400 font-bold"
                        } p-2 transition-colors rounded-full flex text-xs items-center gap-2 hover:bg-gray-100`}
                    >
                        <Pencil className="w-4 h-4" strokeWidth={1} />
                        <p>Pencil</p>
                    </button>
                    <button className="p-2 transition-colors rounded-full flex text-xs items-center gap-2 hover:bg-gray-100">
                        <Tag className="w-4 h-4" strokeWidth={1} />
                        <p>Tag</p>
                    </button>
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
