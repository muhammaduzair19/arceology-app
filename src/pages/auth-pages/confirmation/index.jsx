import { Link } from "react-router-dom"

const Confirmation = () => {
    return (
        <div className="w-full h-screen bg-[#F5F6FA] flex justify-center items-center" >
            <div className="w-full h-full xs:w-96 md:w-[450px] xl:w-[500px] xs:max-h-[430px]  bg-white xs:rounded-lg md:rounded-xl xs:shadow-md">
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-10 " >
                    <svg width="102" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 40L51 0L102 40V92C102 96.4183 98.4183 100 94 100H8C3.58172 100 0 96.4183 0 92V40Z" fill="#131523" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 12C10 9.79086 11.7909 8 14 8H80L92 20V78H10V12Z" fill="#0030A6" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 8H80V20H92V88H10V8Z" fill="#336DFF" />
                        <rect x="31" y="49" width="40" height="4" rx="2" fill="white" />
                        <rect x="41" y="57" width="20" height="4" rx="2" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M60.1129 21.5586L62.8874 24.4399L47.9737 38.8012L40.5859 31.4134L43.4144 28.585L48.0262 33.1962L60.1129 21.5586Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 40L48.5314 78.0639C49.9808 79.2007 52.0192 79.2007 53.4686 78.0639L102 40V96C102 98.2091 100.209 100 98 100H4C1.79086 100 0 98.2091 0 96V40Z" fill="#D7DBEC" />
                    </svg>

                    <div className='w-full flex flex-col items-center gap-1'>
                        <h1 className="text-black text-2xl font-bold" >Almost There!</h1>
                        <p className=" text-gray-600 text-xs md:text-sm text-center" >Check your email inbox and confirm your account</p>
                    </div>


                    <hr className="w-full my-3" />
                    <div className="w-full  text-gray-600 text-xs md:text-sm flex flex-col gap-3 items-center" >
                        <p className="text-xs md:text-sm" >Didn’t receive any mail?</p>
                        <button className="w-full py-2  border border-gray-300 text-blue-700 rounded-sm md:rounded-md flex  items-center justify-center gap-2">
                            <Link to={'/'} className="w-full" >
                                Resend Confirmation
                            </Link>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Confirmation