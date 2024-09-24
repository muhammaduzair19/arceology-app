import { Outlet } from "react-router-dom"
import CanvasSection from "../components/canvas-section"
import Navbar from "../components/navbar/app-nav"
import { useAppContext } from "../context/app-context"

const AppLayout = () => {
    const { isMenuItemCollapsed } = useAppContext();
    return (
        <div className="w-full min-h-screen  bg-white">
            {/* NAVBAR  */}
            <Navbar />
            {/* SIDEBAR  */}
            <main className={`w-full min-h-screen flex `} >
                    <Outlet />
             

                <div className={`w-full h-full ${isMenuItemCollapsed ? "md:pl-24" : "md:pl-64"} py-2 px-4 md:px-8 fixed bg-red-300`}>
                    <CanvasSection />
                </div>
            </main>
        </div>
    )
}

export default AppLayout