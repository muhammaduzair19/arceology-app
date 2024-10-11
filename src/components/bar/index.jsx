import { BarChart, Bar, XAxis, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
    {
        date: '11',
        items: 4000,
    },
    {
        date: '12',
        items: 3000,
    },
    {
        date: '13',
        items: 2000,
    },
    {
        date: '14',
        items: 2780,
    },
    {
        date: '15',
        items: 1890,
    },
    {
        date: '16',
        items: 2390,
    },
    {
        date: '17',
        items: 3490,
    },
];

const BarChartSection = () => {
    return (
        <div className='w-full h-full flex flex-col px-4' >
            <div className='flex flex-col gap-5' >
                <h3 className='text-base md:text-lg font-bold' >Last 7 Days</h3>
                <div className='flex flex-col gap-3' >
                    <div>
                        <p className='text-base md:text-lg font-bold' >645</p>
                        <p className='text-sm text-gray-600' >Items on May 22</p>
                    </div>
                    <div>
                        <p className='text-base md:text-lg font-bold' >475</p>
                        <p className='text-sm text-gray-600' >Items on May 21</p>
                    </div>
                </div>
            </div>
            <hr className='my-3' />

            <ResponsiveContainer width="100%" height={250}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{

                    }}
                    barSize={8}
                >
                    <XAxis className="text-xs" dataKey="date" scale="auto" />
                    <Tooltip />
                    <Bar dataKey="items" fill="#1FD286" radius={[10, 10, 10, 10]} className='' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartSection;
