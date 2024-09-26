import { Amphora, Shovel, UserRound, UsersRound } from "lucide-react";
import BreadCrumb from "../../../components/bread-crumb"
import Card from "../../../components/card";
import ChartSection from "../../../components/chart";
import BarChartSection from "../../../components/bar";
import RecentRecordings from "../../../components/recent-recordings";
import RecentPlannings from "../../../components/recent-plannings";


const cardsData = [
    {
        id: 1,
        quantity: '10,540',
        label: 'Total Items Found',
        percentage: '22.45',
        icon: Amphora,
    },
    {
        id: 2,
        quantity: '1,056',
        label: 'Digs',
        percentage: '15.34',
        icon: Shovel,
    },
    {
        id: 3,
        quantity: '48',
        label: 'Active Explorers',
        percentage: '-18.25',
        icon: UserRound
    },
    {
        id: 4,
        quantity: '5,420',
        label: 'Total Sessions',
        percentage: '-10.24',
        icon: UsersRound
    },
]

const Dashboard = () => {
    return (
        <div className="w-full h-full ">
            <BreadCrumb pageName={'Dashboard'} />
            <div className="w-full h-full px-2 md:px-8 " >
                <div className="w-full grid grid-cols-2  md:grid-cols-4 gap-5" >
                    {
                        cardsData?.map((card) => (
                            <Card key={card.id} icon={card.icon} label={card.label} quantity={card.quantity} percent={card.percentage} />
                        ))
                    }
                    <div className="w-full h-full  col-span-2 row-span-2 md:col-span-2 lg:col-span-3">
                        <ChartSection />
                    </div>
                    <div className="w-full h-full col-span-2 row-span-2 md:col-span-2 lg:col-span-1">
                        <BarChartSection />
                    </div>
                    <div className="w-full h-full col-span-2 row-span-2 md:col-span-2">
                        <RecentRecordings />
                    </div>
                    <div className="w-full h-full col-span-2 row-span-2 md:col-span-2">
                        <RecentPlannings />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard