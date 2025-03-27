import { fn } from '@storybook/test';
import { RadioGroup }  from '@/components/inputs/radio/RadioGroup';

export default {
  title: 'Example/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    onChange: ()=>{},
    required: false,
    disabled: false,
    helperText: "오늘의 점심메뉴를 추천해주세요!",
    errorText: "에러입니다!!!"
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
    onChange: ()=>{},
    required: false,
    disabled: false,
    helperText: "오늘의 점심메뉴를 추천해주세요!",
    errorText: "에러입니다!!!",
  },
};

