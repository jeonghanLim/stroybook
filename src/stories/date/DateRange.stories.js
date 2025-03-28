import { fn } from '@storybook/test';
import { DateRange } from '@/components/date/DateRange';

export default {
  title: 'Example/DateRange',
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
    size : 'lg', 
    color : 'neutral',
    // variant : 'checkbox',
    // variant : 'check',
    // disabled : true, 
    checked : true,
    // indeterminate : true
  },
};

export const Checked = {
  args: {
    checked: true,
    label: 'I am checked!',
  },
};
