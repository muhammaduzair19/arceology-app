import { DataGrid } from "@mui/x-data-grid"

const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'section', headerName: 'Section', width: 100, },
    { field: 'number', headerName: 'Number', width: 100 },
]

const data = [
    { id: 1, title: 'Northeastern, level 1C', number: '32', section: 'Room 2' },
    { id: 1, title: 'Northeastern, level 1C', number: '32', section: 'Room 2' },
    { id: 1, title: 'Northeastern, level 1C', number: '32', section: 'Room 2' },
]
const RecentPlannings = () => {
    return (
        <div className="w-full  border border-gray-300 rounded-md px-5 py-5" >
            <div>
                <h3 className="text-base md:text-lg font-bold" >Recent Plannings</h3>
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

export default RecentPlannings