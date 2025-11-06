'use client';

import { useFund } from '@/hooks/useFund';
import { Line } from '@ant-design/plots';

const renderPointColor = (buyDates: string[], sellDates: string[]) => {
  return (item: any) => {
    if (buyDates.includes(item.date)) {
      return 'green';
    }
    if (sellDates.includes(item.date)) {
      return 'red';
    }
    return 'transparent';
  };
};

interface FundChartProps {
  id: string;
}

const FundChart = ({ id }: FundChartProps) => {
  const { data } = useFund(parseInt(id));

  // 计算自动优化的月份间隔
  const calculateMonthInterval = (netWorthTrend: any[]) => {
    if (!netWorthTrend || netWorthTrend.length < 2) return 6;

    const firstDate = new Date(netWorthTrend[0]?.date);
    const lastDate = new Date(netWorthTrend[netWorthTrend.length - 1]?.date);

    if (isNaN(firstDate.getTime()) || isNaN(lastDate.getTime())) {
      return 6;
    }

    // 计算总月份数
    const totalMonths =
      (lastDate.getFullYear() - firstDate.getFullYear()) * 12 +
      (lastDate.getMonth() - firstDate.getMonth());

    // 根据时间跨度自动选择间隔，目标是显示 5-10 个刻度
    if (totalMonths <= 6) {
      return 1; // 小于等于6个月，间隔1个月
    } else if (totalMonths <= 12) {
      return 2; // 6-12个月，间隔2个月
    } else if (totalMonths <= 24) {
      return 3; // 1-2年，间隔3个月
    } else if (totalMonths <= 36) {
      return 6; // 2-3年，间隔6个月
    } else if (totalMonths <= 60) {
      return 12; // 3-5年，间隔12个月（1年）
    } else if (totalMonths <= 120) {
      return 24; // 5-10年，间隔24个月（2年）
    } else {
      // 超过10年，根据总月份数动态计算，保持约8个刻度
      return Math.ceil(totalMonths / 8);
    }
  };

  const monthInterval = calculateMonthInterval(data?.netWorthTrend || []);

  const config = {
    data: data?.netWorthTrend || [],
    xField: 'date',
    yField: 'nav',
    tooltip: {
      showMarkers: false,
    },
    smooth: true,
    axis: {
      x: {
        line: true,
        arrow: false,
        tickLength: 0,
        labelTransform: 'rotate(0)',
        tickFilter: (_, i, ticks) => {
          // 如果没有数据，隐藏所有刻度
          if (!data?.netWorthTrend?.length) return true;

          // 显示第一个和最后一个刻度
          if (i === 0 || i === ticks.length - 1) return false;

          // 尝试获取日期值
          const dateStr = typeof _ === 'string' ? _ : _?.date;
          if (!dateStr) return true;

          const startDateStr = data.netWorthTrend[0]?.date;
          if (!startDateStr) return true;

          const startDate = new Date(startDateStr);
          const currentDate = new Date(dateStr);

          // 如果日期无效，隐藏
          if (isNaN(startDate.getTime()) || isNaN(currentDate.getTime())) {
            return true;
          }

          // 计算月份差
          const diffMonths =
            (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            (currentDate.getMonth() - startDate.getMonth());

          // 显示与起点相隔自动计算的间隔的整数倍的刻度
          return diffMonths < 0 || diffMonths % monthInterval === 0;
        },
      },
      y: {
        line: true,
        arrow: false,
      },
    },
    point: {
      size: 6,
      style: {
        fill: renderPointColor(['2024-08-18'], ['2023-08-17']),
        stroke: renderPointColor(['2024-08-18'], ['2023-08-17']),
        lineWidth: 1,
        opacity: 0.8,
        r: 4,
      },
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default FundChart;
