import React, { useEffect, useState } from 'react';

const signalData = [
  {
    type: 'green',
    text: 'Green Text',
    time: 10,
  },
  {
    type: 'red',
    text: 'red Text',
    time: 10,
  },
  {
    type: 'orange',
    text: 'Orange Text',
    time: 10,
  },
];

const Signal = () => {
  const [data, setData] = useState(signalData);
  // const [counter, setCounter] = useState(10);

  // useEffect(() => {
  //   for (let i = 0; i < data.length; i++) {
  //     timer(i);
  //   }
  // }, []);

  // const timer = (i) => {
  //   const val = data[i];
  //   let interval = setTimeout(() => {
  //     for (let j = 10; j > 0; j--) {
  //       if (counter > 0) {
  //         setCounter(counter - 1);
  //         console.log('val', val);
  //         val.time = counter;
  //         // console.log('index', val.type, j, counter);
  //       } else if (counter === 0) {
  //         setCounter(0);
  //         clearTimeout(interval);
  //       } else {
  //         setCounter(10);
  //       }
  //     }
  //   }, 1000);
  // };

  useEffect(() => {
    for (let i = 0; i <= 2; i++) {
      if (data[i].time > 0) {
        const interval = setTimeout(() => {
          setData(
            data.map((item, ind) =>
              ind === i
                ? { ...item, time: item.time - 1, on: 'on', off: '' }
                : { ...item, time: item.time, off: 'off', on: '' }
            )
          );
        }, 1000);

        return () => {
          clearTimeout(interval);
        };
      }
    }

    if (data[0].time === 0 && data[1].time === 0 && data[2].time === 0) {
      setData(signalData);
    }
  }, [data]);

  console.log('data', data);

  return (
    <div className='p-10 max-w-[500px] mx-auto'>
      <div className='flex gap-5 items-center'>
        <div className='flex flex-col gap-4'>
          {data.map((item) => {
            // let color = item?.type;
            return (
              <div
                key={item?.type}
                className={`w-10 h-10 rounded-full border-2 transition-all flex items-center }`}
                style={{
                  background: item.on ? 'green' : item.off ? 'red' : 'red',
                  borderColor: item.on ? 'green' : item.off ? 'red' : 'red',
                }}
              >
                <span className='pl-[50px] whitespace-nowrap'>
                  {item.time ? item.time : 10}
                </span>
              </div>
            );
          })}
        </div>

        {/* <div>on Number</div> */}
      </div>
    </div>
  );
};

export default Signal;
