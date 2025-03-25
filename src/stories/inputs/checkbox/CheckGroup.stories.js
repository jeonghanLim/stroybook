// import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions'; 
import { CheckGroup } from '@/components/inputs/checkbox/CheckGroup';

export default {
  title: 'Example/CheckGroup',
  component: CheckGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    onChange: { action: "onChange" },
  },
  args: {
    title: "체크박스 타이틀",
    label: 'Check me!',
    onChange: action("onChange"),
  },
};

const checkboxOptions = [
  { label: "카리나", value: "000" },
  { label: "윈터", value: "001" },
  { label: "안유진", value: "002" },
  { label: "장원영", value: "003" },
  { label: "박보검", value: "004" },
  { label: "설윤", value: "005" },
];


export const Default = {
  args: {
    size : 'lg', 
    title : '좋아하는 연예인을 선택해보세요!',
    helperText : '하나 이상은 선택해야합니다',
    label : '전체 선택',
    color : 'neutral',
    checkboxOptions,
  },
};

