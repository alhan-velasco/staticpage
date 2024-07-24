import React from 'react';
import CardsSong from '../Molecules/CardsSong';
import Subtitle from '../Atoms/Subtitle';

function SectionSongs({ songs }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[#5D5040] text-center font-dm-serif-display text-[67px] font-normal leading-none tracking-[16.08px]">
        <Subtitle subtitle="Canciones más reproducidas" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {songs.map((song, index) => (
          <CardsSong
            key={index}
            title={song.title_song}
            image={song.image}
            text={song.text}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionSongs;