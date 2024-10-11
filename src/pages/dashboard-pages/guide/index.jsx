import { Link } from "react-router-dom"
import BreadCrumb from "../../../components/bread-crumb"
import { ArrowLeft, Search } from "lucide-react"
import { useState } from "react";



const tabs = [
    {
        id: '1',
        name: 'Introduction to Archeology app'
    },
    {
        id: '2',
        name: 'Tutorials for Beginners'
    },
    {
        id: '3',
        name: 'Recording dig'
    },
    {
        id: '4',
        name: 'Recording artifacts'
    },
    {
        id: '5',
        name: 'Content Management'
    },
    {
        id: '6',
        name: 'Generating Reports'
    },
]

const Guide = () => {
    const [activeTab, setActiveTab] = useState('1')
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex gap-4 flex-col md:flex-row" >
                <div className="md:w-1/4 w-full h-full px-0" >
                    <div className="" >
                        <Link to={'/add-collection'} className="flex items-center gap-2 text-sm text-gray-600 font-semiboldbold" >
                            <ArrowLeft strokeWidth={1} className="w-4 h-4" />
                            Back
                        </Link>
                        <BreadCrumb pageName={'Get Started'} />
                    </div>
                    <ul className="flex md:flex-col flex-row w-full overflow-auto" >
                        {
                            tabs?.map((tab) => (
                                <li className="w-full self-start" key={tab.id} >
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`h-full w-full flex text-start cursor-pointer py-3 px-4 text-xs md:text-base ${activeTab === tab.id ? 'bg-blue-700/90 text-white rounded-[5px] font-semibold' : 'font-normal text-black '} `} >
                                        {tab.name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="md:w-3/4 w-full py-6 " >
                    <div className="w-full flex items-center gap-3 px-2 border border-gray-300 rounded-sm md:rounded-md" >
                        <Search strokeWidth={1} className="w-5 h-5 text-gray-600" />
                        <input type="search" placeholder="Search..." name="Search" className="w-full h-full p-2 focus:outline-none" />
                    </div>
                    <div className="w-full px-2 py-2 md:py-5 md:px-5 " >
                        <div className="w-full flex flex-col gap-2 md:gap-4 h-full mt-4 border-b border-gray-300 pb-5" >
                            <h1 className="text-xl  md:text-2xl  font-bold ">
                                Introduction to Archeology app
                            </h1>
                            <p className="text-xs  md:text-sm">
                                Porttitor dictum est nunc amet in nec et quis. Massa fusce in velit pulvinar. Tempus quam donec turpis tellus justo. Sem sit aliquet ac platea. Purus diam cursus sit amet. Risus porta enim duis feugiat consequat. Bibendum amet egestas massa nibh facilisis elementum vitae nisl magna.
                            </p>
                            <div className="w-full flex flex-col gap-2 bg-gray-100 rounded-sm md:rounded-md md:px-5 md:py-5 py-2 px-2 md:text-sm text-gray-600 text-xs" >
                                <p>Recommended:</p>
                                <p>You can learn faster by looking some onboarding videos in video gallery.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 md:gap-4 h-full mt-4 border-b  border-gray-300 pb-5" >
                            <h1 className="text-xl  md:text-2xl  font-bold ">
                                Starting Guide
                            </h1>
                            <p className="text-xs  md:text-sm">
                                Egestas tincidunt pellentesque ultrices dui fusce odio eu purus. Id amet cras donec ullamcorper adipiscing non amet eu nibh. Ipsum purus ullamcorper nullam dui in netus molestie.                             </p>
                            <div
                                className="w-full flex flex-col gap-2  md:px-5 md:py-5 py-2 px-2 md:text-sm text-xs" >
                                <div className="w-full flex items-center gap-2" >
                                    <span className=" w-6 h-6 p-2 text-xs md:text-sm md:w-10 md:h-10 bg-gray-200 rounded-full flex justify-center items-center text-gray-600" >1</span>
                                    <p className="text-black text-balance" >Lorem ipsum dolor sit amet consectetur. Volutpat lorem sed urna sem. Dui mi nibh amet elementum dapibus. </p>
                                </div>
                                <div className="w-full flex items-center gap-2" >
                                    <span className=" w-6 h-6 p-2 text-xs md:text-sm md:w-10 md:h-10 bg-gray-200 rounded-full flex justify-center items-center text-gray-600" >2</span>
                                    <p className="text-black text-balance" >Lorem ipsum dolor sit amet consectetur. Mollis tellus nec in tristique nunc. Orci diam scelerisque amet facilisi duis iaculis et fusce feugiat. </p>
                                </div>
                                <div className="w-full flex items-center gap-2" >
                                    <span className=" w-6 h-6 p-2 text-xs md:text-sm md:w-10 md:h-10 bg-gray-200 rounded-full flex justify-center items-center text-gray-600" >3</span>
                                    <p className="text-black text-balance" >Felis ipsum sit ultricies justo augue diam quis pharetra. Tristique amet feugiat sit neque. Tempus est id nullam sagittis sollicitudin diam tempor.</p>
                                </div>
                            </div>

                        </div>
                        <div className="w-full flex flex-col gap-2 md:gap-4 h-full border-b border-gray-300 pb-5 mt-4" >
                            <h1 className="text-xl  md:text-2xl  font-bold ">
                                Additional Information
                            </h1>
                            <div className="text-xs md:text-sm border-b text-gray-700 flex gap-3 ">
                                <span className="!text-blue-600 border-b pb-3 border-b-blue-600" >Onboarding</span>
                                <span>Tutorials</span>
                                <span>Guide for Beginners</span>
                            </div>
                            <div className=" w-full flex flex-col gap-2 md:gap-4 text-xs md:text-sm" >
                                <p>
                                    In addition to our guides and video tutorials, we offer webinars to help you get comfortable and explore our product functionality. In our webinars, we walk you through the basics of setting up and growing your business.
                                </p>
                                <p>
                                    After it ends, we&apos;ll email you a video link to the webinar so you can remember everything you have learn anytime. If you can&apos;t attend the webinar at its scheduled time, you can watch it later.
                                </p>
                            </div>

                        </div>
                        <div className="w-full flex flex-col gap-2 md:gap-3 h-full mt-4 border-b border-gray-300 pb-5" >
                            <h1 className="text-xl  md:text-2xl  font-bold ">
                                Was this article helpful?
                            </h1>
                            <div className="flex gap-2">
                                <button className="py-1 px-4 border border-gray-400 rounded-md text-blue-600 text-xs md:text-sm" >Yes</button>
                                <button className="py-1 px-4 border border-gray-400 rounded-md text-blue-600 text-xs md:text-sm" >No</button>
                            </div>
                            <p className="text-xs text-gray-500">
                                50 people find this article helpfull
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4 px-2 py-2 md:py-5 md:px-5 ">
                        <div className=" w-full md:w-1/2 flex flex-col gap-2 items-start" >
                            <h2 className="font-bold md:text-xl" >Community Form</h2>
                            <p className="text-xs md:text-sm" >Get help from community members, ask any questions and get answers faster</p>
                            <button className="text-xs md:text-sm text-blue-700" >Join Community</button>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-2 items-start" >
                            <h2 className="font-bold md:text-xl" >Webinars</h2>
                            <p className="text-xs md:text-sm" >Join our series of webinars where you can ask questions live and see a presentation.</p>
                            <button className="text-xs md:text-sm text-blue-700" >Register</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Guide