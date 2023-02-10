import React, { useEffect, useState } from 'react';

const TrafficLight = ({ id, green, red, yellow, length, listData }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div
        className='w-12 h-12 rounded-full bg-[green] flex items-center justify-center text-white'
        // style={{ opacity: flagValue ? '1' : '.5' }}
      >
        {green} {id}
      </div>
      <div
        className='w-12 h-12 rounded-full bg-[red] flex items-center justify-center text-white'
        // style={{ opacity: flagValue ? '1' : '.5' }}
      >
        {red} {id}
      </div>
      <div
        className='w-12 h-12 rounded-full bg-[#f9f900] flex items-center justify-center text-[#000]'
        // style={{ opacity: flagValue ? '1' : '.5' }}
      >
        {yellow} {id}
      </div>
    </div>
  );
};

export default TrafficLight;
