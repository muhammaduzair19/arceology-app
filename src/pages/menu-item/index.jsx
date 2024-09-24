import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context"
import { ChevronRight, Search, Shovel } from "lucide-react";

const MenuLink = ({ to, id, label, isCollapsed, }) => {
    const { setIsMenuItemCollapsed } = useAppContext();
    // const pathname = usePathname();
    // const isActive = pathname === href || (pathname === '/' && href === '/dashboard');
    const isActive = false;

    return (
        <Link
            title={label}
            className={`flex items-center justify-between hover:text-gray-500 hover:bg-blue-100 transition-colors  ${isCollapsed ? 'justify-center px-2 py-1.5' : 'justify-start px-4 py-1.5'}`}
            onClick={() => setIsMenuItemCollapsed(true)}
            to={to}

        >
            <div
                className={`cursor-pointer gap-3 flex items-center  transition-all ease-in  duration-300  
                 ${isActive ? 'bg-blue-200 text-white' : ''}`}
            >

                <span className="w-7 h-7 bg-gray-200 rounded-full text-xs flex font-semibold text-gray-800/60 justify-center items-center">
                    {id + 1}
                </span>
                <span className={`${isCollapsed ? 'hidden' : 'block'} font-semibold text-xs text-gray-800/80`} >
                    {label}
                </span>

            </div>
            <div>
                <ChevronRight className="w-4 h-4 text-gray-800/80" />
            </div>
        </Link>
    )
}



const MenuLinks = [
    {
        id: 0,
        to: '/',
        label: 'Barone',
    },
    {
        id: 1,
        to: '/',
        label: 'Abstergo',
    },
    {
        id: 2,
        to: '/',
        label: 'Big Kahuna',
    },
    {
        id: 3,
        to: '/',
        label: 'Blinford',
    },
    {
        id: 4,
        to: '/',
        label: 'Section C',
    },
    {
        id: 5,
        to: '/',
        label: 'Section D',
    },
    {
        id: 6,
        to: '/',
        label: 'Section E',
    },
    {
        id: 7,
        to: '/',
        label: 'Section F',
    },
    {
        id: 8,
        to: '/',
        label: 'Room 1',
    },
    {
        id: 9,
        to: '/',
        label: 'Room 2',
    },
]

const TagItem = ({ label }) => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`my-2 ${isMenuItemCollapsed ? ' text-center hidden md:block' : 'px-8'}`} >
            <p className="text-xs text-gray-600 font-semibold opacity-70 truncate " >{label}</p>
        </div>
    )
}



const MenuItem = () => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className={`${isMenuItemCollapsed ? 'w-0 md:w-20' : 'w-60'} bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}>
            <div className={`${isMenuItemCollapsed ? 'hidden' : 'block'} px-4 py-2 w-full flex items-center gap-2 mt-3`} >
                <Search className="w-4 h-4 text-gray-500" />
                <input type="search" placeholder="Search.." className="bg-transparent focus:outline-none text-xs w-full" />
            </div>
            <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>

                <div>
                    <TagItem label={'Sections'} />
                    {
                        MenuLinks?.map((menu) => (
                            <MenuLink
                                key={menu.id}
                                id={menu.id}
                                to={menu.to}
                                label={menu.label}
                                isCollapsed={isMenuItemCollapsed}
                            />)
                        )
                    }
                </div>

                <div>
                    <TagItem label={'Features'} />

                    <MenuLink
                        to={'/'}
                        id={0}
                        label={"Features Base"}
                        isCollapsed={isMenuItemCollapsed}
                    />
                </div>
                <div>
                    <TagItem label={'Context'} />

                    <MenuLink
                        to={'/'}
                        id={0}
                        label={"Context 1"}
                        isCollapsed={isMenuItemCollapsed}
                    />
                </div>

            <div className={`w-full px-4 ${isMenuItemCollapsed ? 'py-5' : 'py-2'}`}>
                <button className="w-full flex text-xs items-center gap-2 text-gray-800 bg-gray-200  justify-center p-2 rounded-md" >
                    <Shovel className="w-4 h-4" strokeWidth={1} />
                    <p className={`${isMenuItemCollapsed ? 'hidden' : ' block'}`} >New Section</p>
                </button>
            </div>
            </div>
        </div>
    )
}

export default MenuItem;