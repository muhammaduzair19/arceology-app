import { Link } from "react-router-dom"

const ConfirmEmail = () => {
    return (
        <div className="w-full h-screen bg-[#F5F6FA] flex justify-center items-center" >
            <div className="w-full h-full xs:w-96 md:w-[450px] xl:w-[500px] xs:max-h-[430px]  bg-white xs:rounded-lg md:rounded-xl xs:shadow-md">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-10 " >
                    <div className='w-full flex flex-col items-center gap-1'>
                        <h1 className="text-black text-2xl font-bold" >Confirm Email</h1>
                        <p className=" text-gray-600 text-xs md:text-sm text-center" >Check Your Email and Enter Confirmation Code</p>
                    </div>
                    <div className="w-full">
                        <form className="flex flex-col gap-3" >
                            <div className="flex flex-col justify-normal gap-1 " >
                                <label htmlFor="code" className="text-xs md:text-sm text-gray-600 sm:text-base" >Cofirmation Code</label>
                                <input
                                    className="py-2  px-2 border border-gray-300 rounded-sm md:rounded-md focus:outline-none"
                                    type="text"
                                    placeholder="Enter Code"
                                    name="code" />
                            </div>

                            <button
                                type="submit"
                                className="text-xs md:text-sm bg-blue-600 py-2  rounded-sm md:rounded-md text-white">
                                Confirm Email
                            </button>
                        </form>
                    </div>

                    <hr className="w-full my-3" />
                    <div className="w-full  text-gray-600 text-xs md:text-sm flex flex-col gap-3 items-center" >
                        <p className="text-xs md:text-sm" >Haven&apos;t received your code?</p>
                        <button className="w-full py-2  border border-gray-300 text-blue-700 rounded-sm md:rounded-md flex  items-center justify-center gap-2">
                            <Link to={'/'} className="w-full" >
                                Resend Code
                            </Link>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ConfirmEmail