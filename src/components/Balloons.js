import React from 'react';

// Helper function to generate random delays for each balloon
const generateRandomDelay = () => `${Math.random(1,6) * 10}s`; // Random delay between 0-5 seconds
const generateRandomHorizontalMovement = () => `${Math.random() * 60 - 10}px`; // Random horizontal movement between -30px and 30px

export default function Balloons() {
    return (
        <div>
            <div className="balloon-container">
                <img
                    className="balloon"
                    src="/b1.png"
                    alt="Balloon A"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b2.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/a1.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b4.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b5.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b6.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b7.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b8.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/b9.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
                <img
                    className="balloon"
                    src="/a1.png"
                    alt="Balloon B"
                    style={{
                        animationDelay: generateRandomDelay(), // Random delay for each balloon
                        transform: `translateX(${generateRandomHorizontalMovement()})` // Random horizontal movement
                    }}
                />
            </div>
        </div>
    );
}
