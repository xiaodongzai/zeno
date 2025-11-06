import { Modal, Form, Input, Select, message } from 'antd';
import { useCreateFund } from '@/hooks/useFund';

interface FundCreateModalProps {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const FundCreateModal = ({ open, onCancel, onOk }: FundCreateModalProps) => {
  const [form] = Form.useForm();
  const { mutate: createFund, isPending } = useCreateFund();

  const handleOk = () => {
    form.validateFields().then(values => {
      createFund(values, {
        onSuccess: () => {
          message.success('新增成功');
          onOk?.();
        },
      });
    });
  };

  return (
    <Modal
      title="新增ETF"
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      centered
      destroyOnHidden
      loading={isPending}
      confirmLoading={isPending}
    >
      <Form form={form}>
        <Form.Item label="ETF代码" name="code">
          <Input />
        </Form.Item>
        <Form.Item label="ETF名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="类别" name="category">
          <Select
            options={[
              { label: '股票', value: 'stock' },
              { label: '债券', value: 'bond' },
              { label: '混合', value: 'mixed' },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FundCreateModal;
