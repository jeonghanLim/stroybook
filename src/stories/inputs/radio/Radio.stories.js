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
    flex: { control: 'text'},
    options: { control: 'array' },
    color: { control: 'text' },
    size: { control: 'text' },
    helper: {control: 'text'}
  },
  args: {
    title: "점메추", 
    name: "lunch",
    flex: "column",
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
    helper: "오늘의 점심메뉴를 추천해주세요!"
  },
};

export const Default = {
  args: {
    title: "점메추", 
    name: "lunch",
    flex: "column",
    options: [
                {
                    value: 'pizza',
                    label: '피자',
                },
                {
                    value: 'zzigea',
                    label: '김치찌개',
                },
                {
                  value: 'sushi',
                  label: '초밥',
                  disabled: true
              },
            ],
    color: 'neutral',
    size: 'lg',
    helper: "오늘의 점심메뉴를 추천해주세요!"
  },
};

