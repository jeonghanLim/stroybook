import { fn } from '@storybook/test';
import Radio from '@/components/inputs/radio/Radio';

export default {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    name: { control: 'text' },
    options: { control: 'array' },
    color: { control: 'text' },
    size: { control: 'text' },
  },
  args: {
    title: "색을 골라보세요", 
    name: "color",
    options: [
                {
                    value: 'red',
                    label: '빨강',
                },
                {
                    value: 'blue',
                    label: '파랑'
                }
            ],
    color: 'neutral',
    size: 'lg',
  },
};

export const Default = {
  args: {
    title: "색을 골라보세요", 
    name: "color",
    options: [
                {
                    value: 'red',
                    label: '빨강',
                },
                {
                    value: 'blue',
                    label: '파랑'
                }
            ],
    color: 'neutral',
    size: 'lg',
  },
};

