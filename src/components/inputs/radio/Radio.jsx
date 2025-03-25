import React from "react";
import PropTypes from 'prop-types';

export default function Radio ({index, name, label, value, disabled, radioColorClassName}) {

    return <div className="radio-section" >   {/* 라디오 객체와 라벨을 묶는다 */}
                {/* 라디오 객체 시작 */}
                <div className={[`radio-wrapper`, radioColorClassName].join(' ')}>
                    <div className="radio-base">
                    {disabled
                                    ? <input className="inputClass" type="radio" name={name} value={value} disabled/> 
                                    : <input className="inputClass" type="radio" name={name} value={value} />}
                    </div>
                </div>
                {/* 라디오 객체 끝 */}
                <label className="radio-label">{label}</label>
            </div>
}