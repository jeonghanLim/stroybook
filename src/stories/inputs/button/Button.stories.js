import { fn } from '@storybook/test';
import { Button } from '@/components/inputs/button/Button';
import { AngleLeftIcon, AngleRightIcon, InformationLineIcon } from '@/components/icon/Icon';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export const normal = {
  args: {
    label: 'Button',
  },
};

export const UseIcon = {
  args: {
    label: 'Button',
    startIcon: <AngleLeftIcon/>,
    endIcon: <AngleRightIcon/>
  },
};

export const IconButton = {
  args: {
    startIcon : <InformationLineIcon/>
  },
};

export const MenuButton = {
  args: {
    label: 'Button',
  },
};
