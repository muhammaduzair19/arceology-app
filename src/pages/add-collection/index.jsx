import { Plus } from 'lucide-react'
import BreadCrumb from '../../components/bread-crumb'
import { Link } from 'react-router-dom'

const AddCollection = () => {
    return (
        <div className='min-w-full h-full' >
            <BreadCrumb pageName={'Add Collection'} />
            <div className='w-full h-full py-24 flex justify-center items-center' >
                <div className='flex flex-col items-center gap-3' >
                    <svg width="110" height="107" viewBox="0 0 110 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13 54.5H69V106.5H17C14.7909 106.5 13 104.709 13 102.5V54.5Z" fill="#336DFF" />
                        <path d="M69 54.5H97V102.5C97 104.709 95.2091 106.5 93 106.5H69V54.5Z" fill="#131523" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M69 54.5L81.5 68.5H109.5L97 54.5H69Z" fill="#D7DBEC" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M69.5 54.5L57 68.5H0L12.5 54.5H69.5Z" fill="#D7DBEC" />
                        <circle cx="55" cy="22.5" r="22" fill="#336DFF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M54.1741 16.1145L54.8972 17.1831L55.6204 16.1145C57.8315 13.9361 60.8911 14.0015 63.1595 16.0872L63.3056 16.2262C65.5167 18.4046 65.5638 21.9076 63.4467 24.1423L63.3056 24.2863L54.8972 32.5L46.6944 24.2863C44.4352 22.0605 44.4352 18.4519 46.6944 16.2262C48.9537 14.0005 51.9148 13.8887 54.1741 16.1145Z" fill="white" />
                    </svg>
                    <h2 className='font-bold text-2xl' >
                        Register your first artifact
                    </h2>
                    <p className='text-sm text-gray-600 text-center' >
                        Organize all your items in stock by creating and adding them to recordings. These collections helps to find items faster for your dig.
                    </p>
                    <button className=' text-white flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md' >
                        <Plus />
                        Add Collection
                    </button>
                    <Link to={'/guide'} className='text-sm text-blue-700 hover:underline' >
                    Read more
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default AddCollection