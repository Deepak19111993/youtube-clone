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
  const [counter, setCounter] = useState('');
  // const [stopCounter, setStopCounter] = useState(false);

  useEffect(() => {
    timer();
  }, [counter]);
  const timer = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].type);
      for (let j = 0; j < 10; j++) {
        if (data[i].time > 0) {
          const interval = setTimeout(() => {
            setCounter(data[i].time);
            data[i].time -= 1;
          }, 1000);
          return () => {
            clearTimeout(interval);
          };
        } else {
          data[i].time = 10;
          break;
        }
      }
    }
  };

  console.log('data', data);

  return (
    <div className='p-10 max-w-[500px] mx-auto'>
      <div className='flex gap-5 items-center'>
        <div className='flex flex-col gap-4'>
          {data.map((item) => {
            let color = item?.type;
            return (
              <div
                key={item?.type}
                className={`w-10 h-10 rounded-full border-2 transition-all flex items-center }`}
                style={{ background: color, borderColor: color }}
              >
                <span className='pl-[50px] whitespace-nowrap'>{item.time}</span>
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
