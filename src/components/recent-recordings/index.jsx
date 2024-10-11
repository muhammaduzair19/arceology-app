import { DataGrid } from "@mui/x-data-grid"

const columns = [
    { field: 'title', headerName: 'Title', width: 100 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'section', headerName: 'Section', width: 200, },
]

const data = [
    { id: 1, title: 'North Bulk', date: 'Jul 05, 2024', section: 'Eastern, Section 1, Level 2' },
    { id: 1, title: 'North Bulk', date: 'Jul 05, 2024', section: 'Eastern, Section 1, Level 2' },
    { id: 1, title: 'North Bulk', date: 'Jul 05, 2024', section: 'Eastern, Section 1, Level 2' },
]
const RecentRecordings = () => {
    return (
        <div className="w-full  border border-gray-300 rounded-md px-5 py-5" >
            <div>
                <h3 className="text-base md:text-lg font-bold" >Recent Recordings</h3>
            </div>
            <DataGrid
        
                sx={{
                    border: 'none',
                }}
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                className="bg-white mt-5 !text-gray-700"
            />
        </div>
    )
}

export default RecentRecordings