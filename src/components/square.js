import React from "react";

export function Square ({value, onClick}) {
    return (
        <button
            className="square"
            onClick={onClick}
            style={{backgroundColor: value === null ? null : "#d0ffb4"}}
        >
            {value}
        </button>
    );
}