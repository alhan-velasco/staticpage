import React from 'react';
import Subtitle from '../Atoms/Subtitle';
import CardsCompositor from '../Molecules/CardsCompositor';

function SectionComposition({ compositions }) {
  return (
    <div className="">
      <div className='text-[#5D5040] text-center font-dm-serif-display text-[64px] font-normal leading-none tracking-[15.36px]'><Subtitle subtitle="Productores" /></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {compositions.map((composition, index) => (
          <CardsCompositor
            key={index}
            image={composition.image}
            titleproducer={composition.titleproducer}
            text={composition.text}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionComposition;
