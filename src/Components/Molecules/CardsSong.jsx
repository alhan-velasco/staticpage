import React from 'react';
import TitleSong from '../Atoms/TitleSong';
import Image from '../Atoms/Image';
import Text from '../Atoms/Text';

function CardsSong({ title, image, text }) {
  return (
    <div className="flex-shrink-0 rounded-[29px] bg-[#D0CFCC]">
      <div className="w-[667px] h-[27px] text-[#9E958A] text-center font-dm-sans text-[30px] font-normal leading-none  flex-shrink-0">
        <TitleSong title={title} />
      </div>
      <div className="inline-flex pr-[12px] pl-[12px] items-end gap-[12px]">
        <div className="w-[189px] h-[189px] flex-shrink-0">
          <Image image={image} />
        </div>
        <div className="text-black text-justify font-dm-sans text-[16px] font-normal leading-none w-[442px] h-[185px] flex-shrink-0 flex items-center">
          <Text text={text} />
        </div>
      </div>
    </div>
  );
}

export default CardsSong;
