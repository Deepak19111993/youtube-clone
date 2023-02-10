import React, { useEffect, useState } from 'react';
import TrafficLight from '../TrafficLight/TrafficLight';

const listData = [
  {
    id: 1,
    green: 0,
    red: 0,
    yellow: 0,
  },
  {
    id: 2,
    green: 0,
    red: 0,
    yellow: 0,
  },
  {
    id: 3,
    green: 0,
    red: 0,
    yellow: 0,
  },
  {
    id: 4,
    green: 0,
    red: 0,
    yellow: 0,
  },
];

const Traffic = () => {
  const [data, setData] = useState(listData);

  const [count, setCount] = useState();

  useEffect(() => {
    for(let i =0; i < data.length; i++){
      
    }
    
  }, [data]);

  console.log('data', data);

  return (
    <div className='max-w-[800px] w-full mx-auto flex justify-between px-4 py-10'>
      {data.map((el) => (
        <TrafficLight
          key={el?.id}
          id={el?.id}
          green={el?.green}
          red={el?.red}
          yellow={el?.yellow}
        />
      ))}
    </div>
  );
};

export default Traffic;
