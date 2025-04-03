import { StarIcon, InformationLineIcon, AngleDownIcon, AngleLeftIcon, AngleRightIcon, AngleUpIcon, Icon } from '@/components/icon/Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const star = {
  render: (args)=><div className='w-24 h-24'><StarIcon {...args}/></div>,
  args: {
    size: 24,
    className: 'fill-material-blue-700',
  },
};

export const information = {
  render: (args)=><div style={{width:'24px' , height:'24px'}}><InformationLineIcon {...args}/></div>,
  args: {
    size: 24,
  },
};

export const angle = {
  render: (args)=>
  <div className='flex items-center justify-center'>
    <div style={{width:'24px' , height:'24px'}}><AngleLeftIcon {...args}/></div>
    <div style={{width:'24px' , height:'24px'}}><AngleRightIcon {...args}/></div>
    <div style={{width:'24px' , height:'24px'}}><AngleUpIcon {...args}/></div>
    <div style={{width:'24px' , height:'24px'}}><AngleDownIcon {...args}/></div>
  </div>
  ,
  args: {
    size: 24,
  },
};