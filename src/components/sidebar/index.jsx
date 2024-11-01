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
                        to={"/app"}
                        icon={Shovel}
                        label={trench}
                        isCollapsed={isSidebarCollapsed}
                    />
                  
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
