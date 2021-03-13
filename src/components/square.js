import React from 'react';

export function Square (props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
            style={{backgroundColor : props.value !== null ? "#d0ffb4" : null}}
        >
            {props.value}
        </button>
    );
}