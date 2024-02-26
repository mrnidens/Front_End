import React, { useState, useEffect } from 'react';
import { base_url } from '../utils/constants';

  const AboutMe = () => {
    
    const [heroInfo, setHeroInfo] = useState(null);
    useEffect(() => {

      const heroID = Math.floor(Math.random() * 80) + 1;
      fetch(`${base_url}/v1/peoples/${heroID}`)
      .then(response => response.json())
      .then(data => setHeroInfo(data))
    }, [])


  return (
    <div>
      {heroInfo ? (
        <div>
          <h2>{heroInfo.name}</h2>
          <p>Gender: {heroInfo.gender}</p>
          <p>Homeworld: {heroInfo.homeworld}</p>
          <p>Skin color: {heroInfo.skin_color}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutMe;