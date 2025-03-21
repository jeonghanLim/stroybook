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
    title: "점메추", 
    name: "lunch",
    options: [
                {
                    value: 'pizza',
                    label: '피자',
                },
                {
                    value: 'zzigea',
                    label: '김치찌개'
                }
            ],
    color: 'neutral',
    size: 'lg',
  },
};

export const Default = {
  args: {
    title: "점메추", 
    name: "lunch",
    options: [
                {
                    value: 'pizza',
                    label: '피자',
                },
                {
                    value: 'zzigea',
                    label: '김치찌개'
                }
            ],
    color: 'neutral',
    size: 'lg',
  },
};

