'use client';
import  { RadioGroup }  from "@/components/inputs/radio/RadioGroup";
import { Radio } from "@/components/inputs/radio/Radio";
export default function page() {
    const options = [
        {
            value: 'red',
            label: '빨강',
        },
        {
            value: 'blue',
            label: '파랑',
        },
        {
            value: 'yellow',
            label: '노랑'
        }
    ];

    return (
        <RadioGroup 
            title={"색을 골라보세요"} 
            name={"color"}
            flex={"column"}
            options={options}
            color={'brand'}
            size={'lg'}
            disabled={false}
            helperText={'빨강이나 파랑 중 어떤 것이 마음에 드시나요?'}
            errorText={''}>
                <Radio name={'color'} label={'초록'} value={'green'} disabled={false} color={'brand'}/>
        </RadioGroup>
    );
}