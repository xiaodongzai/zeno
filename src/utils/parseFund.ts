interface FundNetWorthPoint {
  date: string;
  timestamp: number;
  nav: number;
  accNav?: number;
  changeRate?: number;
}

interface FundStockPosition {
  name: string;
  code: string;
  ratio: string;
}

interface FundManager {
  name: string;
  fundSize: string;
  fundDate: string;
}

interface FundPingzhongData {
  code: string;
  type: string;
  netWorthTrend: FundNetWorthPoint[];
  accWorthTrend: FundNetWorthPoint[];
  stockPositions: FundStockPosition[];
  fundManagers: FundManager[];
  rankPercent: number | null;
}

export function parsePingzhongData(
  raw: string,
  code?: string
): FundPingzhongData {
  const getVar = (name: string) => {
    const regex = new RegExp(`var\\s+${name}\\s*=\\s*([^;]+);`);
    const match = raw.match(regex);
    if (!match) return undefined;
    try {
      return eval('(' + match[1] + ')');
    } catch {
      return undefined;
    }
  };

  const netWorthTrend = getVar('Data_netWorthTrend') || [];
  const accWorthTrend = getVar('Data_ACWorthTrend') || [];
  const stockPositions = getVar('Data_fundSharesPositions') || [];
  const fundManagers = getVar('Data_currentFundManager') || [];
  const fundType = getVar('FundType') || '';
  const rankPercent = getVar('Data_rateInSimilarType') || null;

  // 格式化数据
  const formatDate = (ts: number) => new Date(ts).toISOString().split('T')[0];

  return {
    code: code || '',
    type: fundType,
    rankPercent,
    netWorthTrend: netWorthTrend.map((d: any) => ({
      date: formatDate(d.x),
      timestamp: d.x,
      nav: d.y,
      changeRate: d.equityReturn,
    })),
    accWorthTrend: accWorthTrend.map(([x, y]: [number, number]) => ({
      date: formatDate(x),
      timestamp: x,
      accNav: y,
    })),
    stockPositions: stockPositions.map((s: any) => ({
      name: s.stockName,
      code: s.stockCode,
      ratio: s.holdRatio,
    })),
    fundManagers: fundManagers.map((m: any) => ({
      name: m.name,
      fundSize: m.fundSize,
      fundDate: m.fundDate,
    })),
  };
}

export default parsePingzhongData;
