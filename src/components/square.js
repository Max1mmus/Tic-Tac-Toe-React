import React from 'react';

export function Square (props){
  const styles = {};
  if (props.value !== null) {
    styles.background = "yellow";
    } 
    return(
      <button
        className="square"
        onClick={props.onClick}
        style={styles}
      >
        {props.value}
      </button>
      );
}

