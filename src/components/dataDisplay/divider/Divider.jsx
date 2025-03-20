import React from 'react';
import PropTypes from 'prop-types';

// 사용자가 선택할 속성들
/** Primary UI component for user interaction */
export const Divider = ({ 
  orientation, // 방향
  fullWidth = false, // 전체 넓이 100% 설정 여부
  component, // 기본 : hr, 추가 설정 가능 : li
  margin, // 좌우(horizontal), 상하(vertical) 마진 설정 가능(0, 2, 4, 8, 12, 16, 20, 24, 32, 40)
  ...props 
}) => {  

  let orientationClass = "";

  switch(orientation) {
    case 'vertical': 
      orientationClass = 'divider-vertical'; break;
    case 'horizontal': 
      orientationClass = 'divider-horizontal'; break;
    default: break;
  }

  if (component === 'li' && orientation === 'horizontal') {
    return (
      <li 
        className={[
          'divider', 
          orientationClass, 
          fullWidth ? 'w-full' : '',
          margin ? `divider-horizontal-${margin}` : ''
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }

  return (
    <hr 
      className={[
        'divider', 
        orientationClass, 
        fullWidth ? 'w-full' : '',
        margin ? `divider-${orientation === 'horizontal' ? 'horizontal' : 'vertical'}-${margin}` : ''
      ].filter(Boolean).join(' ')} 
      {...props} 
    />
  );
};


Divider.propTypes = {
  /** Which direction should the divider be? */
  orientation : PropTypes.oneOf(['horizontal', 'vertical']),
  /** Should the divider take the full width of its container? */
  fullWidth : PropTypes.bool,
  /** HTML element to render? Default 'hr', can also be 'li'. */
  component : PropTypes.string,
  /** What margin class should be applied to customize the divider's margins? */
  margin : PropTypes.oneOf(['0', '2', '4', '8', '12', '16', '20', '24', '32', '40']),
};

Divider.defaultProps = {
  fullWidth : false,
  component: 'hr',
};
