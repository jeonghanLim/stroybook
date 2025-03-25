import { fn } from '@storybook/test';
import { TextField } from '@/components/inputs/textField/TextField';
import { StarIcon } from '@/components/icon/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Enabled = {
  args:{
    label:'textField',
        startIcon: <StarIcon/>,
        endIcon: <StarIcon/>
  },
};

export const hovered = {
  args:{
    label:'textField',
  },
};

export const focused = {
  args:{
    label:'textField',
  },
};

export const disabled = {
  args:{
    label:'textField',
    disabled: true,
  },
};

export const error = {
  args:{
    label:'textField',
    error: true,
  },
};
