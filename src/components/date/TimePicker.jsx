import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { A } from 'storybook/internal/components';


export const TimePicker = ({ 
  hour = 0
  , minute = 0
  , second = 0
  , step = 1 
  , title = true
  , onChange
  , ...dateTimeProps 
}) => {  

  // const [timePickHour, setTimePickHour] = useState();
  // const [timePickMinute, setTimePickMinute] = useState();
  // const [timePickSecond, setTimePickSecond] = useState();

  const [time, setTime] = useState({hour, minute, second});

  const handleTime = (type, timeValue) => {
    const newTime = {...time, [type] : timeValue}
    setTime(newTime)
    onChange && onChange(time);
  }
console.log(time)
  return (
    <div className="time-wrapper"> 
      <div className="time-bar">
          <TimeController type="hour" count={24} value={hour} text={title && ': hh'} step={1} onChange={handleTime}></TimeController>
          <TimeController type="minute" count={60} value={minute} text={title && ': mm'} step={step && step > 0 ? step : 1} onChange={handleTime}></TimeController>
          <TimeController type="second" count={60} value={second} text={title && ': ss'} step={step && step > 0 ? step : 1} onChange={handleTime}></TimeController>
      </div>
    </div>
  );
};

const TimeController = ({type, count, value = 0, text, step, onChange}) => {

  // time Array
  const _count = Array.from({ length: Math.ceil(count / step) }, (_, i) => String(i * step).padStart(2, '0'));
  // time ref
  const timeRef = useRef(null);
  // time 상태값
  const [_value, setValue] = useState(step ? value/step : value);

  useEffect(()=>{
    const setRefPostion = (ref, index, type) => {
      const currentObj = ref.children[index];
      if(!currentObj) return;
      ref.style.top = '-' + currentObj.offsetTop + 'px';
      onChange && onChange(type, currentObj.innerText);
    }
    if(timeRef.current) setRefPostion(timeRef.current, _value, type);    
  },[_value])

  // 스크롤 이벤트
  const handleScroll = (e) => {
      if(e.deltaY > 0){
        setValue((_value + 1) > _count.length - 1 ? _count.length - 1 : _value + 1);
      }
      else if(e.deltaY < 0){
        setValue((_value - 1) < 0 ? 0 : _value - 1);
      }
  }

  // 시간 클릭 이벤트
  const handleClick = (e) => {
    setValue(Number(e.target.dataset.index));
  }

  return (
    <div className="time-controller" onWheel={handleScroll}>
      <div className='time-box absolute'>
        <div className="time-box-left"></div>
        <div className='time-box-right'>{text}</div>
      </div>
      <div className='time-list-box' ref={timeRef}>
        {_count.map((t, index) => 
          <div key={index} className='time-box'>
            <div 
              className={`single-time time-box-left ${(Number(t) === _value || index === _value) && 'current'}`} 
              key={index} 
              data-index={index} 
              onClick={handleClick}
            >
              {t}
            </div> 
            <div className='time-box-right'></div>
          </div>
        )}
      </div>
    </div>
  )
}

TimePicker.propTypes = {
  hour : PropTypes.number
  , minute : PropTypes.number
  , second : PropTypes.number
  , step : PropTypes.number
  , title : PropTypes.bool
  , onChange: PropTypes.func
};

TimePicker.defaultProps = {
  hour: 0
  , minute : 0
  , second : 0
  , step : 1  
  , title : true
};

/*

*/ 