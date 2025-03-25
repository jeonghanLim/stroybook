'use client';
import Radio from "@/components/inputs/radio/Radio";
export default function page() {
    const options = [
        {
            value: 'red',
            label: '빨강',
            disabled: true
        },
        {
            value: 'blue',
            label: '파랑'
        },
        {
            value: 'yellow',
            label: '노랑'
        }
    ];

    return (
        <Radio 
            title={"색을 골라보세요"} 
            name={"color"}
            flex={"row"}
            options={options}
            color={'neutral'}
            size={'lg'}
            helper={'빨강이나 파랑 중 어떤 것이 마음에 드시나요?'}/>
    );
}