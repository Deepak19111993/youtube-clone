import React, { useEffect, useState } from 'react';

const TrafficLight = ({
  green,
  red,
  yellow,
  id,
  setGreen,
  setRed,
  setYellow,
}) => {
  console.log('id', id);
  // const [idTrue, setIdTrue] = useState(false);
  // const [count, setCount] = useState(10);

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      if (id === 1) {
        console.log('newId', id === i);
        if (green > 0) {
          setTimeout(() => {
            console.log(id, green);
            setGreen(green - 1);
          }, 1000);
        } else {
          setGreen(0);
        }
      } else {
      }
    }

    // switch (id) {
    //   case 1:
    //     if (green > 0) {
    //       console.log(id, green);
    //       setGreen(green - 1);
    //     } else {
    //       setGreen(0);
    //       id = 2;
    //     }
    //     break;
    //   case 2:
    //     if (green > 0) {
    //       console.log(id, green);
    //       setGreen(green - 1);
    //     } else {
    //       setGreen(0);
    //       id = 3;
    //     }
    //     break;
    //   case 3:
    //     if (green > 0) {
    //       console.log(id, green);
    //       setGreen(green - 1);
    //     } else {
    //       setGreen(0);
    //       id = 4;
    //     }
    //     break;
    //   case 4:
    //     if (green > 0) {
    //       console.log(id, green);
    //       setGreen(green - 1);
    //     } else {
    //       setGreen(0);
    //       id = 1;
    //     }
    //     break;
    //   default:
    //     return green;
    // }
    // }, 1000);
    // return () => {
    //   clearTimeout(interval);
    // };
  }, [green]);

  console.log('green', green);

  return (
    <div className='flex flex-col gap-4'>
      <div className='w-12 h-12 rounded-full bg-[green] flex items-center justify-center text-white'>
        {green} {id}
      </div>
      <div className='w-12 h-12 rounded-full bg-[red] flex items-center justify-center text-white'>
        {red} {id}
      </div>
      <div className='w-12 h-12 rounded-full bg-[#f9f900] flex items-center justify-center text-white'>
        {yellow} {id}
      </div>
    </div>
  );
};

export default TrafficLight;
