
const DigCard = ({ name, quantity, image }) => {
    return (
        <div className="overflow-hidden rounded-md border border-gray-300" >
            <div>
                <img src={`/images/${image}`} alt="section1" className="w-full h-full object-contain" />
            </div>
            <div className="w-full flex  flex-col bg-white px-3 py-3" >
                <p className="text-xs md:text-sm font-bold" >{name}</p>
                <p className="text-xs text-gray-600" >{quantity} items</p>
            </div>
        </div>
    )
}

export default DigCard;


