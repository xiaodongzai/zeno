// 获取 ETF 最新价格

import { NextResponse } from 'next/server';
import parseFund from '@/utils/parseFund';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { error: 'Code parameter is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://fund.eastmoney.com/pingzhongdata/${code}.js`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch fund data' },
        { status: response.status }
      );
    }

    const text = await response.text();
    const match = text.match(/var Data_netWorthTrend = (\[.*?\])/);

    if (!match) {
      return NextResponse.json(
        { error: 'Failed to parse fund data' },
        { status: 500 }
      );
    }

    const netWorthData = parseFund(text, code);

    return NextResponse.json(netWorthData);
  } catch (error) {
    console.error('Error fetching ETF price:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
