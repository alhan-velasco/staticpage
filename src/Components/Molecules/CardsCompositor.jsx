import React from 'react';
import Image from '../Atoms/Image';
import Text from '../Atoms/Text';
import TitleProducer from '../Atoms/TitleProducer';

function CardsCompositor({ image,titleproducer,text }) {
  return (
    <div className="w-[449px] h-[752px] flex-shrink-0 rounded-[15px] bg-[#9E958A]">

      <div className='w-[449px] h-[305px] flex-shrink-0 px-[72px] pt-[22px]'>
        <Image image={image} />
      </div>

      <div className='text-white text-center font-dm-serif-display text-[32px] font-normal leading-none tracking-[7.68px] pt-[27px]'>
      <TitleProducer titleproducer={titleproducer}/>
      </div>

      <div className='text-[#554737] text-justify font-dm-serif-display text-[20px] font-normal leading-[31.632px] w-[423px] h-[215px] flex-shrink-0 px-[13px] pt-[25px]'>
        <Text text={text} />
      </div>

    </div>
  );
}

export default CardsCompositor;
