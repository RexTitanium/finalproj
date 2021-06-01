import React from 'react';
import './styles/Loading.css';
export const Loading = () => {
    return(
        <div className="mar">
            <div className="loader"></div>
            <h1 className="loading" data-text="Loading . . .">Loading . . .</h1>
        </div>
    );
};