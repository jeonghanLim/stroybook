import { fn } from '@storybook/test';
import { Menu } from '@/components/navigation/menu/Menu';
import { StarIcon } from '@/components/icon/Icon';

export default {
  title: 'Example/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <div style={{ width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center '}}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
};

export const Default = {
  args:{
    items: [
      { label: 'Option1', value: 'Option1', startIcon: <StarIcon /> },
      { label: 'Option2', value: 'Option2', endIcon: <StarIcon /> },
      { label: 'Option3', value: 'Option3', startIcon: <StarIcon />, endIcon: <StarIcon /> },
    ]
  },
};

