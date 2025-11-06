'use client';
import ContentHeader from '@/components/ContentHeader';
import { Button } from 'antd';
import FundList from '@/components/FundList';
import { useFunds } from '@/hooks/useFund';
import { useState } from 'react';
import FundCreateModal from '@/components/FundList/FundCreateModal';

const PoolPage = () => {
  const { data, isLoading } = useFunds();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleCreateOk = () => {
    setEditModalOpen(false);
  };

  return (
    <div>
      <div className="mb-6">
        <ContentHeader
          title="ETF池子"
          description="管理您的ETF投资标的池子"
          action={
            <Button
              type="primary"
              icon={<i className="fas fa-plus"></i>}
              onClick={() => setEditModalOpen(true)}
            >
              新增ETF
            </Button>
          }
        />
      </div>
      <div>
        <FundList dataSource={data || []} loading={isLoading} />
        {editModalOpen && (
          <FundCreateModal
            open={editModalOpen}
            onCancel={() => setEditModalOpen(false)}
            onOk={handleCreateOk}
          />
        )}
      </div>
    </div>
  );
};

export default PoolPage;
