import { fn } from '@storybook/test';
import { List } from '@/components/dataDisplay/list/List';

export default {
  title: 'Example/List',
  component: List,
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
  args: {
  },
};

export const Dense = {
  args: {
    dense : true,
  },
};

