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
  render: (args)=><StarIcon {...args}/>,
  args: {
    size: 24,
    className: 'fill-material-blue-700',
  },
};

export const information = {
  render: (args)=><InformationLineIcon {...args}/>,
  args: {
    size: 24,
  },
};

export const angle = {
  render: (args)=>
  <div style={{display:'flex'}}>
    <AngleLeftIcon {...args}/>
    <AngleRightIcon {...args}/>
    <AngleUpIcon {...args}/>
    <AngleDownIcon {...args}/>
  </div>
  ,
  args: {
    size: 24,
  },
};