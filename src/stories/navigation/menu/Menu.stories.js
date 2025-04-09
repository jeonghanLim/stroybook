import { fn } from '@storybook/test';
import { Menu } from '@/components/navigation/menu/Menu';
import { StarIcon } from '@/components/icon/Icon';

export default {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args:{
    startIcon: <StarIcon />,
    endIcon: <StarIcon />
  },
};

