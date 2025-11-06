import CustomLayout from '@/components/Layout';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomLayout>{children}</CustomLayout>;
}
