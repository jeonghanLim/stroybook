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
    // orientation: { control: 'control' },
  },
  args: {
  },
};

export const Default = {
  args:{
    startIcon: <StarIcon />,
    endIcon: <StarIcon />
  },
};

