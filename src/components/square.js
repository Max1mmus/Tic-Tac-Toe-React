import React from 'react';

export function Square ({value, onClick}) {
    return (
        <button
            className="square"
            onClick={onClick}
            style={{backgroundColor : value !== null ? "#d0ffb4" : null}}
        >
            {value}
        </button>
    );
}