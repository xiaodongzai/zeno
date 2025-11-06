import { Button, Flex } from 'antd';
interface ContentHeaderProps {
  title: string;
  description: string;
  action: React.ReactNode;
}
const ContentHeader = ({ title, description, action }: ContentHeaderProps) => {
  return (
    <Flex justify="space-between" align="center">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div>{action}</div>
    </Flex>
  );
};

export default ContentHeader;
