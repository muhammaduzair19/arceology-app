import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        time: '4am',
        uv: 10000000,
        pv: 20000000,
        amt: 24000000,
    },
    {
        time: '5am',
        uv: 15000000,
        pv: 25000000,
        amt: 22000000,
    },
    {
        time: '6am',
        uv: 18000000,
        pv: 29000000,
        amt: 29000000,
    },
    {
        time: '7am',
        uv: 20000000,
        pv: 30000000,
        amt: 30000000,
    },
    {
        time: '8am',
        uv: 22000000,
        pv: 35000000,
        amt: 31000000,
    },
    {
        time: '9am',
        uv: 24000000,
        pv: 40000000,
        amt: 35000000,
    },
    {
        time: '10am',
        uv: 26000000,
        pv: 45000000,
        amt: 37000000,
    },
    {
        time: '11am',
        uv: 26000000,
        pv: 4500000,
        amt: 3700000,
    },
    {
        time: '12pm',
        uv: 26000000,
        pv: 45000000,
        amt: 37000000,
    },
    {
        time: '1pm',
        uv: 26000000,
        pv: 45000000,
        amt: 37000000,
    },
    {
        time: '2pm',
        uv: 26000000,
        pv: 45000000,
        amt: 37000000,
    },
    {
        time: '3pm',
        uv: 26000000,
        pv: 45000000,
        amt: 37000000,
    }
];

const ChartSection = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between">
                <h3 className="text-base md:text-lg font-bold">Discovers Over Time</h3>
                <select>
                    <option value="12 Hours">12 Hours</option>
                    <option value="24 Hours">24 Hours</option>
                </select>
            </div>
            <div className='flex justify-between my-4 flex-col xs:flex-row gap-5'>
                <div className='flex items-center gap-6' >
                    <div>
                        <p className='text-base md:text-lg font-bold' >645</p>
                        <p className='text-sm text-gray-600' >Items on May 22</p>
                    </div>
                    <div>
                        <p className='text-base md:text-lg font-bold' >475</p>
                        <p className='text-sm text-gray-600' >Items on May 21</p>
                    </div>
                </div>
                <div className='flex items-center gap-4' >
                    <div className='flex items-center gap-2 text-xs text-gray-600' >
                        <span className='bg-[#b1b0d6] p-1.5' ></span>
                        <p>May 21</p>
                    </div>
                    <div className='flex items-center gap-2 text-xs text-gray-600' >
                        <span className='bg-[#8884d8] p-1.5' ></span>
                        <p>May 22</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{
                        left:-30,
                        top:20
                    }}
                >
                    <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        strokeDasharray="3 3" />
                    <XAxis dataKey="time" className="text-xs" />

                    <YAxis
                        ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]} // The tick values in data range
                        tickFormatter={(value) => `${(value / 1000000).toFixed(0)}`} // Format values in millions
                        tick={{ fontSize: 12, dx: -1, dy: -1 }} // Custom tick styling
                        tickLine={false} // Remove tick lines
                        axisLine={false} // Remove Y-axis line
                        domain={[0, 50000000]} // Define the domain for Y-axis
                    />

                    <Tooltip />
                    <Line type="linear" dataKey="pv" stroke="#8884d8" strokeWidth={4} />
                    <Line type="monotone" dataKey="uv" stroke="#b1b0d6" strokeWidth={4} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartSection;
