import React, { useState } from 'react';

const CakeWithCandle = ({ onFireOff }) => {
    const [isFireOff, setIsFireOff] = useState(false);

    const handleCandleClick = () => {
        setIsFireOff(true); // Turn off the fire
        onFireOff(); // Notify Home component to show confetti
    };

    return (
        <div className="cake-container">
            <div className="cake">
                <div className="cake-top">
                    <div className="candle" onClick={handleCandleClick}>
                        {!isFireOff && <div className="fire" />}
                    </div>
                </div>
                <div className="cake-body"></div>
            </div>
        </div>
    );
};

export default CakeWithCandle;
