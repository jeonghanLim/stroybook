import { fn } from '@storybook/test';
import { DateField } from '@/components/date/DateField';

export default {
  title: 'Example/DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {

  },
};

export const Default = {
  args: {
    size : 'lg', 
    color : 'neutral',
    // variant : 'checkbox',
    // variant : 'check',
    // disabled : true, 
    checked : true,
    // indeterminate : true
  },
};
