import React from 'react';

const REPOButton = ({ children, onClick, ...props }) => {
    return (
        <button className="repo-button" onClick={onClick} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default REPOButton;
