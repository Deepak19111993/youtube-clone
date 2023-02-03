import React, { useEffect, useState } from 'react';
import TrafficLight from '../TrafficLight/TrafficLight';

const Traffic = () => {
  const [green, setGreen] = useState(10);
  const [red, setRed] = useState(0);
  const [yellow, setYellow] = useState(5);
  const [id, setId] = useState(1);

  useEffect(() => {
    console.log('fsv');
  }, []);

  return (
    <div className='max-w-[800px] w-full mx-auto flex justify-between px-4 py-10'>
      <TrafficLight
        id={id}
        green={green}
        setGreen={setGreen}
        red={red}
        setRed={setRed}
        yellow={yellow}
        setYellow={setYellow}
      />
      <TrafficLight
        id={id + 1}
        green={green}
        setGreen={setGreen}
        red={red}
        setRed={setRed}
        yellow={yellow}
        setYellow={setYellow}
      />
      <TrafficLight
        id={id + 2}
        green={green}
        setGreen={setGreen}
        red={red}
        setRed={setRed}
        yellow={yellow}
        setYellow={setYellow}
      />
      <TrafficLight
        id={id + 3}
        green={green}
        setGreen={setGreen}
        red={red}
        setRed={setRed}
        yellow={yellow}
        setYellow={setYellow}
      />
    </div>
  );
};

export default Traffic;
