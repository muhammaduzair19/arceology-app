import { Pencil } from "lucide-react"
import BreadCrumb from "../../components/bread-crumb"
import DigCard from "../../components/dig-card"

const Dig = () => {
    return (
        <div className="min-w-full h-full">
            <div className="flex w-full justify-between items-center">
                <BreadCrumb pageName={'Digs'} />
                <button className="py-2 px-8 md:rounded-md rounded-sm bg-blue-700 text-white flex items-center gap-2" >
                    <Pencil strokeWidth={1} className="w-4 h-4 " />
                    <p className="text-xs md:text-sm" >Item Menu</p>
                </button>
            </div>
            <div className="w-full h-full grid gap-5 items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" >
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
                <DigCard />
            </div>
        </div>
    )
}

export default Dig