import { useAppContext } from "../../context/app-context"
import { Award, ChartColumnStacked, CircleHelp, CirclePlus, Folder, Home, List, MessageSquareMore, Settings, Shovel, Star, Tag, UserRound, Users } from "lucide-react";
import TagItem from "./tag";
import SidebarLink from "./link";



const MenuLinks = [
   
    {
        id: 0,
        to: '/',
        icon: Home,
        label: 'Dashboard',
    },
    {
        id: 8,
        to: '/dig',
        icon: Shovel,
        label: 'Digs'
    },
    {
        id: 9,
        to: '/add-collection',
        icon: CirclePlus,
        label: 'Add Collection'
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
        <div className={`${isSidebarCollapsed ? 'w-0 md:w-20' : 'w-60'} fixed overflow-auto  bg-blue-50 top-12 z-10 min-h-full shadow-md transition-all ease-in-out  duration-300`} >
            <div className="flex-grow">
                <div>
                    <TagItem label={'Menu'} />
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
                    <TagItem label={'Other Information'} />

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
                    <TagItem label={'Settings'} />
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