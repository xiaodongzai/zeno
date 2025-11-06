// 插入 获取 删除 更新 ETF

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 获取所有 ETF
export async function GET(request: Request) {
  const etfs = await prisma.etf.findMany({
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true,
      code: true,
      name: true,
      category: true,
      updatedAt: true,
    },
    take: 100,
  });
  // 获取每个ETF的最新净值估值涨跌幅(gszzl)，返回结构为 jsonpgz(...)
  await Promise.all(
    etfs.map(async (etf: any) => {
      const res = await fetch(`http://fundgz.1234567.com.cn/js/${etf.code}.js`);
      const text = await res.text();
      // 返回的格式为 jsonpgz({...});
      const match = text.match(/jsonpgz\((.*)\);/);
      if (match) {
        try {
          const priceObj = JSON.parse(match[1]);
          etf.change = priceObj.gszzl;
          etf.price = priceObj.gsz;
        } catch {
          etf.change = null;
          etf.price = null;
        }
      }
    })
  );
  return NextResponse.json(etfs);
}

// 插入 ETF
export async function POST(request: Request) {
  const { code, name, category } = await request.json();
  if (!code || !name) {
    return NextResponse.json({ error: 'Invalid ETF data' }, { status: 400 });
  }
  const etf = await prisma.etf.create({
    data: { code, name, category },
  });
  return NextResponse.json(etf);
}

// 删除 ETF - 已移动到 /api/pool/[id] 路由
