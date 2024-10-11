import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/app-nav"
import { useAppContext } from "../context/app-context"

const AppLayout = () => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className="w-full min-h-screen  bg-white">
            {/* NAVBAR  */}
            <Navbar />
            {/* MAIN PAGE  */}
            <main className={`w-full min-h-screen flex `} >
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout