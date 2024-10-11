import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="w-full h-screen bg-[#F5F6FA] flex justify-center items-center" >
            <div className="w-full h-full xs:w-96 md:w-[450px] xl:w-[500px] xs:max-h-[550px]  bg-white xs:rounded-lg md:rounded-xl xs:shadow-md"
            >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-10 " >
                    <div className='w-full flex flex-col items-center'>
                        <h1 className="text-black text-2xl font-bold" >Create an Account</h1>
                        <div className="text-xs md:text-sm flex gap-1">
                            <p className=" text-gray-600" >Have an account?  </p>
                            <Link to={'/signin'} className="text-blue-700"  > Sign In </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <form className="flex flex-col gap-3" >
                            <div className="flex flex-col justify-normal gap-1 " >
                                <label htmlFor="email" className="text-xs md:text-sm text-gray-600 sm:text-base" >Email</label>
                                <input className="py-2 px-2 border border-gray-300 rounded-sm md:rounded-md focus:outline-none"
                                    type="text" placeholder="Enter Email Address" name="email" />
                            </div>
                            <div className="flex flex-col justify-normal gap-1 " >
                                <label htmlFor="password" className="text-xs md:text-sm text-gray-600 sm:text-base" >Password</label>
                                <input className="py-2 px-2 border border-gray-300 rounded-sm md:rounded-md focus:outline-none"
                                    type="password" placeholder="Create Password" name="password" />
                            </div>
                            <button type="submit" className="text-sm bg-blue-600 py-2 rounded-sm md:rounded-md text-white">
                                Create Account
                            </button>
                        </form>
                    </div>
                    <div className="text-xs md:text-sm flex flex-col items-center gap-1">
                        <p className="text-gray-600">
                            By creating account, you agree to our
                        </p>
                        <p className="text-blue-700" >
                            Terms of Service
                        </p>
                    </div>
                    <hr className="w-full" />
                    <div className="w-full  text-gray-600 text-xs md:text-sm flex flex-col gap-3 items-center" >
                        <p>Or create an account using:</p>
                        <div className="w-full flex flex-col gap-2" >
                            <button className="w-full py-2 border border-gray-300 text-blue-700 rounded-sm md:rounded-md flex  items-center justify-center gap-2">

                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8H9V11H14C13.2579 13.0956 11.3503 14.4 9 14.4C6.01785 14.4 3.6 11.9822 3.6 9C3.6 6.01785 6.01785 3.6 9 3.6C10.3765 3.6 11.6289 4.1193 12.5824 4.96755L15.1281 2.4219C13.5207 0.92385 11.3706 0 9 0C4.02975 0 0 4.02975 0 9C0 13.9703 4.02975 18 9 18C13.9703 18 18 13.9703 18 9C18 8.39655 18 8 18 8Z" fill="#FFC107" />
                                    <path d="M1 4.82508L3.93798 7C4.73295 5.01328 6.65821 3.61057 8.91122 3.61057C10.2789 3.61057 11.5232 4.1314 12.4707 4.98214L15 2.42901C13.4029 0.926564 11.2666 0 8.91122 0C5.47649 0 2.49783 1.95738 1 4.82508Z" fill="#FF3D00" />
                                    <path d="M8.98584 18C11.3029 18 13.4082 17.1321 15 15.7208L12.2237 13.4214C11.3231 14.0891 10.2036 14.4881 8.98584 14.4881C6.65266 14.4881 4.67156 13.032 3.92523 11L1 13.2059C2.48459 16.0492 5.49952 18 8.98584 18Z" fill="#4CAF50" />
                                    <path d="M18 8L9 8V11H14C13.6436 11.9505 12.8352 12.403 12 13L15 16C14.8029 16.1691 18 13.7489 18 9.5C18 8.93022 18 8 18 8Z" fill="#1976D2" />
                                </svg>

                                Continue with Google
                            </button>
                            <button className="w-full py-2 border border-gray-300 text-blue-700 rounded-sm md:rounded-md flex  items-center justify-center gap-2">

                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9.055C18 4.05406 13.9706 0 9 0C4.02943 0 0 4.05406 0 9.055C0 13.5746 3.29117 17.3207 7.59375 18V11.6725H5.30859V9.055H7.59375V7.06007C7.59375 4.79066 8.93739 3.53711 10.9932 3.53711C11.9779 3.53711 13.0078 3.71397 13.0078 3.71397V5.94235H11.8729C10.7549 5.94235 10.4062 6.64034 10.4062 7.35643V9.055H12.9023L12.5033 11.6725H10.4062V18C14.7088 17.3207 18 13.5746 18 9.055Z" fill="#1877F2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.4758 11.3738L12.8904 8.67961H10.2968V6.93126C10.2968 6.19418 10.6591 5.47573 11.8208 5.47573H13V3.18204C13 3.18204 11.9298 3 10.9067 3C8.77056 3 7.37443 4.29029 7.37443 6.62621V8.67961H5V11.3738H7.37443V17.8868C7.85054 17.9612 8.33852 18 8.83562 18C9.33271 18 10.0239 18.0745 10.5 18V11.487L12.4758 11.3738Z" fill="white" />
                                </svg>


                                Continue with Facebook
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register