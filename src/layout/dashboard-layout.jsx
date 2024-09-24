import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar/dashboard-nav"
import { useAppContext } from "../context/app-context"

const DashboardLayout = () => {
    const { isSidebarCollapsed } = useAppContext();
    return (
        <div className="w-full min-h-screen  bg-white">
            {/* NAVBAR  */}
            <Navbar />
            {/* SIDEBAR  */}
            <main className={`w-full min-h-screen flex`} >
                <Sidebar />
                <div className={`w-full h-full ${isSidebarCollapsed ? "md:pl-24" : "md:pl-64"} py-2 px-4 md:px-8 overflow-auto`}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout