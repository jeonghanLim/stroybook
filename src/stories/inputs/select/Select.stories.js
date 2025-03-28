import { fn } from '@storybook/test';
import { Select } from '@/components/inputs/select/Select';

export default {
  title: 'Example/Select',
  component: Select,
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

