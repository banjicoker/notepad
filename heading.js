import React from 'react';

function Heading() {
    function Greeting() {
        // Get the current hour
        const currentHour = new Date().getHours();
    
        // Function to determine the appropriate greeting and color based on the time of day
        const getGreeting = () => {
            if (currentHour >= 0 && currentHour < 12) {
                return { greeting: 'Good morning', color: 'red' };
            } else if (currentHour >= 12 && currentHour < 18) {
                return { greeting: 'Good afternoon', color: 'green' };
            } else {
                return { greeting: 'Good evening', color: 'blue' };
            }
        };
    
        const { greeting, color } = getGreeting();
    
        return (
            <div>
                <h1 style={{ color: color }}>{greeting}</h1>
            </div>
        );
    }
    
    return (
        <div>
            <Greeting />
        </div>
    );
}

export default Heading;
