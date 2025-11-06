'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PriceData {
  date: string;
  value: number;
}

interface ETFChartProps {
  data: PriceData[];
  title?: string;
}

const ETFChart = ({ data, title = '日线趋势图' }: ETFChartProps) => {
  // 格式化日期显示
  const formatDate = (date: string) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  // 格式化数值显示
  const formatValue = (value: number) => {
    return value.toFixed(4);
  };

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis domain={['auto', 'auto']} tickFormatter={formatValue} />
          <Tooltip
            formatter={(value: number) => formatValue(value)}
            labelFormatter={(label: string) => {
              const d = new Date(label);
              return d.toLocaleDateString('zh-CN');
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1890ff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            name="净值"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ETFChart;
