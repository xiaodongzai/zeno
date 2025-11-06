'use client';

import FundChart from '@/components/FundChart';
import { useParams } from 'next/navigation';

const PoolDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <FundChart id={id} />
    </div>
  );
};

export default PoolDetailPage;
