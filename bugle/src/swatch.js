import React from 'react';

export function Swatch(props) {
    const bugle = props.bugle

    return (
        <div className="swatch">
            <span className="name">{bugle.name}</span>
            <span className="sequence">{bugle.sequence}</span>
            <span className="delete-button" onClick={() => props.remove(bugle.name)}>&#x2716;</span>

        </div>
    );

}