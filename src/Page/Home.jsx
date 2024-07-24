import React from 'react';
import SectionTop from '../Components/Organisms/SectionTop';
import SectionSongs from '../Components/Organisms/SectionSongs';
import SectionComposition from '../Components/Organisms/SectionComposition';
import information from '../Data/Information';

function Home() {
  return (
    <div className="home">
      <SectionTop top={information.top} />
      <SectionSongs songs={information.song} />
      <SectionComposition compositions={information.composition} />
    </div>
  );
}

export default Home;
