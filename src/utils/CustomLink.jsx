import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, className }) => {
    const handleClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = to; // Manually navigate to the specified route
    };

    return (
        <Link to={to} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
};

export default CustomLink;
