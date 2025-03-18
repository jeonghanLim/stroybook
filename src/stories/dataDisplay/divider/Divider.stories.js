import { fn } from '@storybook/test';
import { Divider } from '@/components/dataDisplay/divider/Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
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
    orientation: 'horizontal',
  },
};

export const Horizontal = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical = {
  args: {
    orientation: 'vertical',
  },
};
