'use client';
import { Layout } from 'antd';
import langZH from 'antd/locale/zh_CN';
import Header from './Header';
import Nav from './Nav';
import { ConfigProvider } from 'antd';

import styles from './index.module.css';

const antConfig = {
  token: {
    colorPrimary: '#3B82F6',
    colorPrimaryHover: '#60A5FA',
    colorPrimaryActive: '#2563EB',
    colorSuccess: '#16A34A',
    colorWarning: '#F59E0B',
    colorError: '#EF4444',
    colorInfo: '#3B82F6',

    colorBgBase: '#F8FAFC',
    colorBgContainer: '#FFFFFF',
    colorBgElevated: '#FFFFFFF7',
    colorBorder: '#E2E8F0',
    colorBorderSecondary: '#F1F5F9',
    colorSplit: '#F1F5F9',

    colorText: '#1E293B',
    colorTextSecondary: '#64748B',
    colorTextTertiary: '#94A3B8',
    colorTextPlaceholder: '#94A3B8',

    colorLink: '#3B82F6',
    colorLinkHover: '#60A5FA',

    borderRadius: 10,
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
    fontFamily: "Inter, 'SF Pro Display', 'PingFang SC', sans-serif",
    controlHeight: 36,
    lineHeight: 1.6,
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      colorPrimaryBg: '#3B82F6',
      colorPrimaryHover: '#60A5FA',
      colorPrimaryActive: '#2563EB',
      controlOutline: '0 0 0 2px rgba(59,130,246,0.15)',
    },
    Card: {
      borderRadiusLG: 12,
      colorBgContainer: '#FFFFFF',
      boxShadowTertiary: '0 2px 10px rgba(15,23,42,0.04)',
    },
    Input: {
      borderRadius: 8,
      colorBgContainer: '#FFFFFF',
      colorBorder: '#E2E8F0',
      activeShadow: '0 0 0 2px rgba(59,130,246,0.12)',
    },
    Tabs: {
      itemActiveColor: '#3B82F6',
      itemHoverColor: '#60A5FA',
      inkBarColor: '#3B82F6',
    },
    Table: {
      headerBg: '#F8FAFC',
      rowHoverBg: '#F1F5F9',
      borderColor: '#E2E8F0',
    },
    Layout: {
      headerBg: '#FFFFFFE6',
      bodyBg: '#F8FAFC',
      siderBg: '#FFFFFF',
    },
    Menu: {
      colorItemBg: 'transparent',
      colorItemText: '#334155',
      colorItemTextHover: '#3B82F6',
      colorItemTextSelected: '#3B82F6',
      colorItemBgSelected: '#EFF6FF',
    },
  },
};

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const HeaderStyle = {
    height: '64px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    padding: '0',
  };
  const SiderStyle = {
    backgroundColor: '#fff',
    borderRight: '1px solid #e5e5e5',
    padding: '16px',
  };
  const ContentStyle = {
    padding: '24px',
  };
  return (
    <ConfigProvider theme={antConfig} locale={langZH}>
      <Layout className="h-screen">
        <Layout.Header style={HeaderStyle}>
          <Header />
        </Layout.Header>
        <Layout className="flex">
          <Layout.Sider style={SiderStyle} width={255}>
            <Nav />
          </Layout.Sider>
          <Layout.Content className="flex-1" style={ContentStyle}>
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default CustomLayout;
