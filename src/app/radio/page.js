'use client';
import Radio from "@/components/inputs/radio/Radio";
export default function page() {
    const options = [
        {
            value: 'red',
            label: '빨강',
        },
        {
            value: 'blue',
            label: '파랑'
        }
    ];

    return (
        <Radio 
            title={"색을 골라보세요"} 
            name={"color"}
            options={options}
            color={'neutral'}
            size={'lg'}/>
    );
}