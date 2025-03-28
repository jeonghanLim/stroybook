import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@/components/dataDisplay/divider/Divider';

export const Menu = ({
  startIcon
  , endIcon
  , label
  , menuItemDivider
  , ...props 
}) => {  

    return (
      <div className='menu'>
        <div className='menuItem'>
          <div className="menuItem-container">
            <div className="menuItem-base">
              { startIcon &&
                <span className='menuItem-icon'>{startIcon}</span>
              }
              <p className='menuItem-label'>{label}</p>
              { endIcon &&
                <span className='menuItem-icon'>{endIcon}</span>
              }
            </div>
          </div>
          { menuItemDivider && <Divider /> }
        </div>
      </div>
    );
};


Menu.propTypes = {
  /** Menu 앞쪽  */
};

Menu.defaultProps = {
};
