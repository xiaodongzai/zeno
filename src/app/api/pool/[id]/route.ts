// 获取单个 ETF 详情、更新、删除

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import parseFund from '@/utils/parseFund';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ETF ID' }, { status: 400 });
  }

  const etf = await prisma.etf.findUnique({
    where: { id },
  });

  const code = etf?.code;

  if (code) {
    const response = await fetch(
      `http://fund.eastmoney.com/pingzhongdata/${code}.js`
    );
    const text = await response.text();
    const data = parseFund(text, code);
    etf!.netWorthTrend = data.netWorthTrend;
  }

  if (!etf) {
    return NextResponse.json({ error: 'ETF not found' }, { status: 404 });
  }

  return NextResponse.json(etf);
}

// 更新 ETF
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ETF ID' }, { status: 400 });
  }
  const { code, name, category } = await request.json();
  const etf = await prisma.etf.update({
    where: { id },
    data: { code, name, category, updatedAt: new Date() },
  });

  return NextResponse.json(etf);
}

// 删除 ETF
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ETF ID' }, { status: 400 });
  }

  const etf = await prisma.etf.delete({
    where: { id },
  });

  return NextResponse.json(etf);
}
