import React from 'react';
import PropTypes from 'prop-types';

export const Divider = ({ 
  orientation // 방향
  , component = "hr" // 기본 : hr, 추가 설정 가능 : li
  , margin // 좌우(horizontal), 상하(vertical) 마진 설정 가능(0, 2, 4, 8, 12, 16, 20, 24, 32, 40)
  , ...props 
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
          'divider' 
          , orientationClass 
          , margin ? `divider-horizontal-${margin}` : ''
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }

  return (
    <hr 
      className={[
        'divider' 
        , orientationClass 
        , margin ? `divider-${orientation === 'horizontal' ? 'horizontal' : 'vertical'}-${margin}` : ''
      ].filter(Boolean).join(' ')} 
      {...props} 
    />
  );
};


Divider.propTypes = {
  /** Divider 방향 설정 : 가로 / 세로 */
  orientation : PropTypes.oneOf(['horizontal', 'vertical']),
  /** Divider 렌더링 요소 설정 : hr(기본) / li(추가 설정 가능) */
  component : PropTypes.string,
  /** Divider 여백 설정 : 가로 - 좌우 여백 / 세로 - 상하 여백 */
  margin : PropTypes.oneOf(["0", "2", "4", "8", "12", "16", "20", "24", "32", "40"]),
};

Divider.defaultProps = {
  component: 'hr',
};

/*
divider-horizontal-0
divider-horizontal-2
divider-horizontal-4
divider-horizontal-8
divider-horizontal-12
divider-horizontal-16
divider-horizontal-20
divider-horizontal-24
divider-horizontal-32
divider-horizontal-40

divider-vertical-0
divider-vertical-2
divider-vertical-4
divider-vertical-8
divider-vertical-12
divider-vertical-16
divider-vertical-20
divider-vertical-24
divider-vertical-32
divider-vertical-40
*/ 
