import { Amphora, ChevronDown, ChevronUp } from 'lucide-react'

const Card = ({ label, icon: Icon, quantity, percent }) => {
    return (
        <div className='w-full bg-white flex justify-between gap-2 px-2 py-1 md:py-3 md:px-4 border-r'  >
            <div className='flex flex-col gap-2' >
                <p className='text-base md:text-xl font-bold' >{quantity}</p>
                <p className='text-gray-600 text-xs' >{label}</p>
                <span className={`text-xs md:text-sm flex items-center gap-2 ${percent?.includes('-') ? "text-red-500" : "text-green-500"}`} >
                    <p>{percent}%</p>
                    {percent.includes("-") ? <ChevronDown strokeWidth={1} /> : <ChevronUp strokeWidth={1} />}

                </span>
            </div>
            <div className='flex justify-center items-center' >
                <span className='text-blue-900 w-8 h-8 p-2 md:w-12 md:h-12 flex justify-center items-center bg-blue-100 md:p-2 rounded-full' >
                    <Icon className='w-4 h-4 md:w-6 md:h-6' />
                </span>
            </div>
        </div>
    )
}

export default Card