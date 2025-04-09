import { Menu } from '@/components/navigation/menu/Menu';
import { StarIcon } from '@/components/icon/Icon';

export default {
  title: 'Example/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <div style={{ width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { label: '전체', value: '', startIcon: <StarIcon /> },
      { label: 'options1', value: '1', startIcon: <StarIcon />, endIcon: <StarIcon /> },
      { label: 'options2', value: '2' },
      { label: 'options3', value: '3', endIcon: <StarIcon /> },
    ],
  },
};
