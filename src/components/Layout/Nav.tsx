import { Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

const items = [
  {
    key: 'dashboard',
    label: '仪表盘',
    icon: <i className="fas fa-tachometer-alt"></i>,
  },
  {
    key: 'pool',
    label: 'ETF池子',
    icon: <i className="fas fa-box"></i>,
  },
  {
    key: 'strategies',
    label: '策略库',
    icon: <i className="fas fa-lightbulb"></i>,
  },
  {
    key: 'portfolio',
    label: '仓位追踪',
    icon: <i className="fas fa-briefcase"></i>,
  },
  {
    key: 'journal',
    label: '交易日志',
    icon: <i className="fas fa-book"></i>,
  },
  {
    key: 'review',
    label: '复盘系统',
    icon: <i className="fas fa-chart-bar"></i>,
  },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (event: any) => {
    router.push(`/${event.key}`);
  };
  return (
    <Menu
      mode="inline"
      items={items}
      onClick={handleClick}
      selectedKeys={[pathname.split('/').pop() || '']}
    />
  );
}
