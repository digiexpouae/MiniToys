import { LineChart, Line, Cell, ResponsiveContainer, PieChart, Pie } from "recharts";

const StorageChart = ({
    total,
    used,
    title,
    color,
    backgroundColor = '#e5e7eb',
    showLimit = false
}) => {
    const available = total - used;
    const percentage = (used / total) * 100;

    const data = [
        { name: 'Used', value: used },
        { name: 'Available', value: available }
    ];

    const COLORS = [color, backgroundColor];

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            startAngle={90}
                            endAngle={450}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-800">{available}GB</div>
                    <div className="text-sm text-gray-500">Free</div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <div className="text-lg font-semibold text-gray-800">{title}</div>
                <div className="text-sm text-gray-500">
                    {used}GB of {total}GB used
                </div>
                {showLimit && (
                    <div className="text-xs text-gray-400 mt-1">{total}GB Limit</div>
                )}
            </div>
        </div>
    );
};
export default StorageChart