// Loader.js
import React from 'react';
import './Loader.css'; // Create a CSS file for styling

const Loader = () => {
    return (
        <div className="loader-container min-h-screen">
            <code>LOADING</code>
            <div className="spin">
                <div className="inner"></div>
            </div>
        </div>
    );
};

export default Loader;
