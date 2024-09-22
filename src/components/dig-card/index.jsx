
const DigCard = () => {
    return (
        <div className="overflow-hidden rounded-md border border-gray-300" >
            <div>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/fa/ec/63/pokaran.jpg" alt="section1" />
            </div>
            <div className="w-full flex  flex-col bg-white px-3 py-3" >
                <p className="text-xs md:text-sm font-bold" >Basket 32</p>
                <p className="text-xs text-gray-600" >24 items</p>
            </div>
        </div>
    )
}

export default DigCard