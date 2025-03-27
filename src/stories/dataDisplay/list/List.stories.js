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
    label:'textField',
      startIcon: <StarIcon size={20}/>,
      endIcon: <StarIcon size={20}/>
  },
};

export const Dense = {
  args: {
    dense : true,
  },
};

