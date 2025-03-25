import { fn } from '@storybook/test';
import { Divider } from '@/components/dataDisplay/divider/Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ width:'220px' }}>
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
