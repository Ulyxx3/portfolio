import React from 'react';

const REPOSlider = ({ label, value, showArrows = true }) => {
    return (
        <div className="repo-slider">
            <div className="repo-slider-label">{label}</div>
            <div className="repo-slider-bar-container">
                {showArrows && <span className="repo-slider-arrow">&lt;</span>}
                <div className="repo-slider-bar">
                    <div className="repo-slider-fill" style={{ width: `${value}%` }} />
                </div>
                {showArrows && <span className="repo-slider-arrow">&gt;</span>}
            </div>
            <div className="repo-slider-value">{value}%</div>
        </div>
    );
};

export default REPOSlider;
