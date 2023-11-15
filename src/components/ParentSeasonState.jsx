import React, { useState } from 'react';
import Child from './Child.jsx';
import Child2 from './Child2.jsx';

function ParentSeasonState() {
    const [selectedSeason, setSelectedSeason] = useState('spring');

    const handleSeasonChange = (season) => {
        setSelectedSeason(season);
    };

    // Define the buttons here

    return (
        <>
            <Child selectedSeason={selectedSeason} onSeasonChange={handleSeasonChange} />
            <Child2 selectedSeason={selectedSeason} />
        </>



    );
}

export default ParentSeasonState;
