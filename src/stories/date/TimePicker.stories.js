import { fn } from '@storybook/test';
import { TimePicker } from '@/components/date/TimePicker';

export default {
  title: 'Example/TimePicker',
  component: TimePicker,
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
    hour: 12
    // , second:15
    // , step:21
    // , title:false

  },
};
