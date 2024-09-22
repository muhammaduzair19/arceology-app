import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context"
import { Award, ChartColumnStacked, CircleHelp, Folder, Home, House, Layout, List, MessageSquareMore, Settings, Star, Tag, UserRound, Users } from "lucide-react";

const SidebarLink = ({ to, icon: Icon, label, isCollapsed, }) => {
    // const pathname = usePathname();
    // const isActive = pathname === href || (pathname === '/' && href === '/dashboard');
    const isActive = false;

    return (
        <Link to={to}>
            <div
                className={`cursor-pointer flex items-center  transition-all ease-in  duration-300
                    ${isCollapsed ? 'justify-center py-2' : 'justify-start px-8 py-2'}
                     hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
                     ${isActive ? 'bg-blue-200 text-white' : ''}`}
            >

                <Icon className="w-5 h-5 !text-gray-700" strokeWidth={1} />
                <span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-xs text-gray-700`} >
                    {label}
                </span>

            </div>
        </Link>
    )
}



const MenuLinks = [
    {
        id: 0,
        to: '/',
        icon: Home,
        label: 'Dashboard',
    },
    {
        id: 1,
        to: '/',
        icon: List,
        label: 'Orders',
    },
    {
        id: 2,
        to: '/',
        icon: Tag,
        label: 'Products',
    },
    {
        id: 3,
        to: '/',
        icon: Folder,
        label: 'Categories',
    },
    {
        id: 4,
        to: '/',
        icon: Users,
        label: 'Customers',
    },
    {
        id: 5,
        to: '/',
        icon: ChartColumnStacked,
        label: 'Reports',
    },
    {
        id: 6,
        to: '/',
        icon: Star,
        label: 'Coupons',
    },
    {
        id: 7,
        to: '/',
        icon: MessageSquareMore,
        label: 'Inbox',
    },
]




const Sidebar = () => {


    const { isSidebarCollapsed } = useAppContext();
    return (
        <div className={`${isSidebarCollapsed ? 'w-0 md:w-20' : 'w-60'} fixed  bg-white top-12 h-full shadow-md transition-all ease-in  duration-300`} >
            <div className="flex-grow">
                <div>
                    <div className={`my-3 ${isSidebarCollapsed ? 'py-2 text-center hidden md:block' : 'px-8 py-2 '}`} >
                        <p className="text-xs text-gray-600 font-semibold opacity-70 truncate" >Menu</p>
                    </div>
                    {
                        MenuLinks?.map((menu) => (
                            <SidebarLink
                                key={menu.id}
                                to={menu.to}
                                icon={menu.icon}
                                label={menu.label}
                                isCollapsed={isSidebarCollapsed}
                            />)
                        )
                    }
                </div>
                <div>
                    <div className={`my-3 ${isSidebarCollapsed ? 'py-2 text-center hidden md:block' : 'px-8 py-2'}`} >
                        <p className="text-xs text-gray-600 font-semibold opacity-70" >Other Information</p>
                    </div>

                    <SidebarLink
                        to={'/'}
                        icon={CircleHelp}
                        label={"Knowledge Base"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={'/'}
                        icon={Award}
                        label={"Products Updates"}
                        isCollapsed={isSidebarCollapsed}
                    />
                </div>
                <div>
                    <div className={`my-3 ${isSidebarCollapsed ? 'justify-center py-2 text-center hidden md:block'  : 'justify-start px-8 py-2 '}`} >
                        <p className="text-xs text-gray-600 font-semibold opacity-70 " >Settings</p>
                    </div>

                    <SidebarLink
                        to={'/'}
                        icon={UserRound}
                        label={"Profile Setting"}
                        isCollapsed={isSidebarCollapsed}
                    />
                    <SidebarLink
                        to={'/'}
                        icon={Settings}
                        label={"Global Setting"}
                        isCollapsed={isSidebarCollapsed}
                    />
                </div>

            </div>
        </div>
    )
}

export default Sidebar