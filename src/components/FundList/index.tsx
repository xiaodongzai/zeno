'use client';

import {
  Button,
  Table,
  type TableColumnType,
  Tag,
  message,
  Space,
  Popconfirm,
  Divider,
} from 'antd';
import FundChange from './FundChange';
import Link from 'next/link';
import { useDeleteFund } from '@/hooks/useFund';

interface FundListProps {
  dataSource: any[];
  loading: boolean;
}

const FundList = ({ dataSource, loading }: FundListProps) => {
  const { mutate: deleteFund } = useDeleteFund();

  const columns: TableColumnType<any>[] = [
    {
      title: 'ETF代码',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'ETF名称',
      dataIndex: 'name',
      key: 'name',
      render: (value: string, record: any) => (
        <Link
          href={`/pool/${record.id}`}
          target="_blank"
          className="text-primary hover:text-blue-700 font-medium font-bold"
        >
          {value}
        </Link>
      ),
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category',
      render: (value: string, record: any) => <Tag color="blue">{value}</Tag>,
    },
    {
      title: '最新价',
      dataIndex: 'price',
      key: 'price',
      render: (value: string, record: any) =>
        value ? parseFloat(value).toFixed(2) : '-',
    },
    {
      title: '涨跌幅',
      dataIndex: 'change',
      key: 'change',
      render: (value: string, record: any) => <FundChange value={value} />,
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size={4} split={<Divider type="vertical" />}>
          <Button
            type="link"
            className="text-primary hover:text-blue-700 font-medium font-bold"
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button
              type="link"
              className="text-primary hover:text-blue-700 font-medium font-bold"
            >
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDelete = (id: number) => {
    deleteFund(id);
  };

  return (
    <div className="bg-white rounded-lg shadow-card">
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        size="large"
      />
    </div>
  );
};

export default FundList;
