import { Pencil } from "lucide-react"
import BreadCrumb from "../../components/bread-crumb"
import DigCard from "../../components/dig-card"

const digs = [
    {
        id: 1,
        name: 'Basket 32',
        quantity: 24,
        image: 'basket32.svg'
    },
    {
        id: 2,
        name: 'Section 1',
        quantity: 24,
        image: 'section1.svg'
    },
    {
        id: 3,
        name: 'Section B',
        quantity: 24,
        image: 'sectionb.svg'
    },
    {
        id: 4,
        name: 'Basket 28',
        quantity: 24,
        image: 'basket28.svg'
    },
    {
        id: 5,
        name: 'Section C',
        quantity: 24,
        image: 'sectionc.svg'
    },
    {
        id: 6,
        name: 'Section 2',
        quantity: 24,
        image: 'section2.svg'
    },
    {
        id: 7,
        name: 'Room 1',
        quantity: 24,
        image: 'room1.svg'
    },
    {
        id: 8,
        name: 'Room 2',
        quantity: 24,
        image: 'room2.svg'
    },
]


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
                {
                    digs?.map((dig) => (
                        <DigCard
                            key={dig.id}
                            name={dig.name}
                            quantity={dig.quantity}
                            image={dig.image}
                        />)
                    )
                }
            </div>
        </div>
    )
}

export default Dig