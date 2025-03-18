import React from 'react'
import PropTypes from 'prop-types';

export const Icon = ({
    size,
    className,
    children,
}) => {
    return (
        <div className='icon-box'>
            <svg 
                width={size && size} height={size && size}
                viewBox="0 0 24 24"
                className={className ? className : 'fill-current'}
            >
                {children}
            </svg>
        </div>
    )
}

Icon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
};

export const StarIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M21.9647 10.7672L17.7459 14.4075L19.0312 19.8516C19.1022 20.1471 19.0839 20.457 18.9788 20.7422C18.8736 21.0273 18.6863 21.2749 18.4406 21.4537C18.1948 21.6325 17.9015 21.7344 17.5979 21.7466C17.2942 21.7588 16.9937 21.6807 16.7344 21.5222L12 18.6084L7.26281 21.5222C7.00353 21.6798 6.70341 21.7571 6.40026 21.7445C6.0971 21.7318 5.80446 21.6298 5.55919 21.4512C5.31392 21.2726 5.12698 21.0254 5.02191 20.7407C4.91684 20.4561 4.89835 20.1467 4.96875 19.8516L6.25875 14.4075L2.04 10.7672C1.81059 10.5689 1.64468 10.3075 1.56298 10.0155C1.48129 9.72345 1.48743 9.41385 1.58064 9.12531C1.67385 8.83678 1.85 8.5821 2.08709 8.39308C2.32418 8.20407 2.6117 8.08908 2.91375 8.0625L8.445 7.61625L10.5788 2.4525C10.6942 2.17108 10.8908 1.93036 11.1435 1.76094C11.3961 1.59153 11.6935 1.50107 11.9977 1.50107C12.3019 1.50107 12.5992 1.59153 12.8518 1.76094C13.1045 1.93036 13.3011 2.17108 13.4166 2.4525L15.5494 7.61625L21.0806 8.0625C21.3833 8.0881 21.6716 8.20244 21.9096 8.39119C22.1475 8.57995 22.3245 8.83473 22.4183 9.12361C22.5121 9.4125 22.5185 9.72264 22.4368 10.0152C22.3552 10.3077 22.189 10.5696 21.9591 10.7681L21.9647 10.7672Z"/>
        </Icon>
    )
};
export const InformationLineIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"/>
        </Icon>
    )
};
export const AngleLeftIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"/>
        </Icon>
    )
};
export const AngleRightIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"/>
        </Icon>
    )
};
export const AngleUpIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"/>
        </Icon>
    )
};
export const AngleDownIcon = ({ size, className }) => {
    return (
        <Icon size={size} className={className}>
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"/>
        </Icon>
    )
};