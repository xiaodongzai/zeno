// 获取单个 ETF 详情、更新、删除

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import parseFund from '@/utils/parseFund';

// Edge API Route handler signatures: (request: Request) => Response, params from context

// Helper to extract id param from URL
function getIdFromUrl(request: Request): number | null {
  const url = new URL(request.url);
  const paths = url.pathname.split('/');
  const idStr = paths[paths.length - 1] || paths[paths.length - 2];
  const id = parseInt(idStr, 10);
  if (Number.isNaN(id)) return null;
  return id;
}

// 获取单个 ETF 详情
export async function GET(request: Request) {
  const id = getIdFromUrl(request);
  if (!id) {
    return NextResponse.json({ error: 'Invalid ETF ID' }, { status: 400 });
  }

  const etf = await prisma.etf.findUnique({
    where: { id },
  });

  if (!etf) {
    return NextResponse.json({ error: 'ETF not found' }, { status: 404 });
  }

  const code = etf.code;

  if (code) {
    const response = await fetch(
      `http://fund.eastmoney.com/pingzhongdata/${code}.js`
    );
    const text = await response.text();
    const data = parseFund(text, code);
    // Append netWorthTrend if the type allows it
    // @ts-ignore
    etf.netWorthTrend = data.netWorthTrend;
  }

  return NextResponse.json(etf);
}

// 更新 ETF
export async function PATCH(request: Request) {
  const id = getIdFromUrl(request);
  if (!id) {
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
export async function DELETE(request: Request) {
  const id = getIdFromUrl(request);
  if (!id) {
    return NextResponse.json({ error: 'Invalid ETF ID' }, { status: 400 });
  }

  const etf = await prisma.etf.delete({
    where: { id },
  });

  return NextResponse.json(etf);
}
