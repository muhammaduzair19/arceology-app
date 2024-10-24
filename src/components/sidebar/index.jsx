import { useAppContext } from "../../context/app-context";
import {
    Award,
    ChartColumnStacked,
    ChevronDown,
    ChevronRight,
    CircleHelp,
    CirclePlus,
    Folder,
    Home,
    List,
    MessageSquareMore,
    Settings,
    Shovel,
    Star,
    Tag,
    UserRound,
    Users,
} from "lucide-react";
import TagItem from "./tag";
import SidebarLink from "./link";
import { useState } from "react";

const dropDownMenus = [
    {
        label: "Untyped",
        menus: [
            { menuName: "Corner Base", link: "/" },
            { menuName: "Bases Elevation", link: "/" },
            { menuName: "New Base", link: "/" },
        ],
    },
    {
        label: "Context",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
    {
        label: "Objects",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
    {
        label: "Summaries",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
    {
        label: "Sections",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
    {
        label: "Lots",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
    {
        label: "Plans",
        menus: [{ menuName: "Deposit", link: "/" }],
    },
];

const DropDownMenu = ({ isCollapsed, label, menus }) => {
    const [dropMenu, setDropMenu] = useState({});

    return (
        <div
            className={`cursor-pointer flex items-center group  py-2 
${isCollapsed ? "justify-center" : "justify-start px-8 "}
 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors `}
        >
            <div className="flex flex-col gap-4 w-full overflow-hidden">
                <div
                    onClick={() =>
                        setDropMenu({
                            name: label,
                            isActive: !dropMenu.isActive,
                        })
                    }
                    className={`z-20 group-hover:bg-blue-100 ${
                        isCollapsed ? "justify-center" : ""
                    } flex  items-center gap-3 overflow-hidden`}
                >
                    <ChevronDown
                        className="w-5 h-5 items-center !text-gray-700"
                        strokeWidth={1}
                    />
                    <p
                        className={`${
                            isCollapsed ? "hidden" : "block"
                        } font-medium text-xs text-gray-700 capitalize`}
                    >
                        {label}
                    </p>
                </div>
                {menus.length > 0 && (
                    <div
                        className={`w-full transition-all  duration-300 -mt-3 flex flex-col m gap-4  ${
                            dropMenu.name === label && dropMenu.isActive
                                ? "translate-y-0 h-full mb-4"
                                : "-translate-y-full h-0.5"
                        }`}
                    >
                        {menus?.map(({ menuName, link }, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-center pl-4 py-1 text-xs text-gray-800 hover:underline justify-between"
                            >
                                <span className="capitalize">{menuName}</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Sidebar = () => {
    const { isSidebarCollapsed, trench } = useAppContext();
    return (
        <div
            className={`${
                isSidebarCollapsed ? "w-0 md:w-20" : "w-60"
            } overflow-auto  bg-blue-50 top-12 z-10 min-h-screen  shadow-md transition-all ease-in-out  duration-300`}
        >
            <div className="flex-grow overflow-auto h-full">
                <div>
                    <TagItem label={"Menu"} />
                    <SidebarLink
                        to={"/"}
                        icon={Home}
                        label={"Dashboard"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Shovel}
                        label={trench}
                        isCollapsed={isSidebarCollapsed}
                    />
                    {dropDownMenus?.map((menu, index) => (
                        <DropDownMenu
                            key={index}
                            isCollapsed={isSidebarCollapsed}
                            label={menu.label}
                            menus={menu.menus}
                        />
                    ))}
                    <SidebarLink
                        to={"/"}
                        icon={CirclePlus}
                        label={"Add Trench"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/dig"}
                        icon={List}
                        label={"Trenches"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Tag}
                        label={"Tags"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Folder}
                        label={"Categories"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Users}
                        label={"Diggers"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={ChartColumnStacked}
                        label={"Reports"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Star}
                        label={"Coupons"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={MessageSquareMore}
                        label={"Inbox"}
                        isCollapsed={isSidebarCollapsed}
                    />
                </div>
                <div>
                    <TagItem label={"Other Information"} />

                    <SidebarLink
                        to={"/"}
                        icon={CircleHelp}
                        label={"Knowledge Base"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Award}
                        label={"Products Updates"}
                        isCollapsed={isSidebarCollapsed}
                    />
                </div>
                <div>
                    <TagItem label={"Settings"} />
                    <SidebarLink
                        to={"/"}
                        icon={UserRound}
                        label={"Profile Setting"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={"/"}
                        icon={Settings}
                        label={"Global Setting"}
                        isCollapsed={isSidebarCollapsed}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
