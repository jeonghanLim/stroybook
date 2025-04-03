import { fn } from '@storybook/test';
import { Textarea } from '@/components/inputs/textarea/Textarea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onChange: fn()
  },
};

export const Default = {
  args:{
    label:'textarea'
    , required : true
    , helperText: 'helperText'
  },
};

export const LabelLeft = {
  args:{
    label:'textarea'
    , labelLeft: true
    , helperText: 'helperText'
  },
};

export const ResizeDisable = {
  args:{
    label:'textarea'
    , resizeable: false
    , helperText: 'helperText'
  },
};

export const CustomOverflow = {
  args:{
    label:'textarea'
    , labelLeft: true
    , helperText: 'Welcome to our submission portal! Please provide a brief, clear summary of your content or ideas. This input will serve as a snapshot of your background and help others understand your perspective. Aim for clarity and conciseness while ensuring that you capture the essential details. We encourage you to review your entry for any typos or grammatical errors, as clear communication is key. If you need further guidance or inspiration, feel free to check out our help documentation or reach out to our support team. Thank you for taking the time to craft your message carefully'
    , setOverflowErrorMsg: (maxLength)=>(`커스텀 된 에러메세지 입니다. -> ${maxLength}이하 작성 요망`)
  },
};