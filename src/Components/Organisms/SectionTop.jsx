import React from 'react';
import Top from '../Molecules/Top';

function SectionTop({ top }) {
  return (
    <div className="">
      {top.map((item, index) => (
        <Top
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default SectionTop;
