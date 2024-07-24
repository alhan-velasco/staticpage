import React from 'react';
import Title from '../Atoms/Title';
import Text from '../Atoms/Text';
import Image from '../Atoms/Image';

function Top({ title, text, image }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-[73px] px-[6px] py-[10px] pr-[94px]">
      <div className='flex-shrink-0 w-[494px] h-[684px] flex items-center justify-center overflow-hidden'>
        <img 
          src={image} 
          alt="Descripción de la imagen" 
          className='w-full h-full object-cover' 
        />
      </div>

      <div className="flex flex-col items-center gap-[8px]">
        <div className='w-[759px] h-[192px] text-[#9E958A] text-center font-dm-serif-text text-[64px] font-normal'>
          <Title title={title}/>
        </div>

        <div className='flex flex-col justify-center w-[646px] h-[332px] text-[#9E958A] text-justify font-dm-sans text-[30px] font-normal'>
          <Text text={text} />
        </div>
      </div>
    </div>
  );
}

export default Top;
