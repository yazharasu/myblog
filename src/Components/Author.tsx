import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10">
      <div className="absolute flex -top-14 !justify-center">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100"
          width="100"
          className="align-middle rounded-full border-t-2 border-cyan-500"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-black mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-black text-ls">{author.bio}</p>
    </div>
  );

export default Author