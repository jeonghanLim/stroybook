import { fn } from '@storybook/test';
import { Checkbox } from '@/components/inputs/checkbox/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    checked: false,
    label: 'Check me!',
    onChange: fn(),
  },
};

export const Default = {
  args: {
    checked: false,
    label: 'Check me!',
  },
};

export const Checked = {
  args: {
    checked: true,
    label: 'I am checked!',
  },
};
