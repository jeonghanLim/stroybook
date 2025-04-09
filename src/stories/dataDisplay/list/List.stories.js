import { fn } from '@storybook/test';
import { List } from '@/components/dataDisplay/list/List';
import { StarIcon } from '@/components/icon/Icon';

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
  args:{
    startIcon: <StarIcon />,
    endIcon: <StarIcon />
  },
};

export const NoIcon = {
};

export const Dense = {
  args: {
    dense : true,
  },
};

