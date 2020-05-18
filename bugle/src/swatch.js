import React from 'react';

export function Swatch(props) {
    const bugle = props.bugle

    return (
        <div className="swatch">
            <span className="name">{bugle.name}</span>
            <span className="sequence">{bugle.sequence}</span>
            <span className="delete-button">&#x2716;</span>

        </div>
    );

}