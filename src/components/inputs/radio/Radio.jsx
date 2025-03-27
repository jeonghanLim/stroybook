import React from "react";
import PropTypes from 'prop-types';

export const Radio = ({
    name
    , label
    , value
    , color
    , onChange
    , disabled
    , checked
}) => {

    const radioColorClassName = color === 'brand' ? 'radio-color-brand' : 'radio-color-neutral';
    const handleChange = (e) => {
        if(onChange && typeof(onChange)==='function') {
            onChange(e);
        }
    }
    return (
        <div className="radio-section" >   {/* 라디오 객체와 라벨을 묶는다 */}
            {/* 라디오 객체 시작 */}
            <div className={[`radio-wrapper`, radioColorClassName].join(' ')}>
                <div className="radio-base">
                    <input className="input-class" type="radio" name={name} value={value} disabled={disabled} checked={checked} onChange={handleChange}/> 
                </div>
            </div>
            {/* 라디오 객체 끝 */}
            <p className="radio-label">{label}</p>
        </div>
            )
}