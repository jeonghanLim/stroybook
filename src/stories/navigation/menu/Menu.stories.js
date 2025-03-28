import { fn } from '@storybook/test';
import { Menu } from '@/components/navigation/menu/Menu';

export default {
  title: 'Example/Menu',
  component: Menu,
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
  args: {
    // orientation: 'horizontal',
  },
};

