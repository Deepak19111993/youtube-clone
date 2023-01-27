import React, { useEffect, useState } from 'react';

const signalData = [
  {
    type: 'green',
    text: 'Green Text',
  },
  {
    type: 'red',
    text: 'red Text',
  },
  {
    type: 'orange',
    text: 'Orange Text',
  },
];

const Signal = () => {
  const [data, setData] = useState(signalData);
  const [time, setTime] = useState(10);
  //   const [on, setOn] = useState(false);
  const [typeStr] = useState(['green', 'red', 'orange']);

  useEffect(() => {
    setInterval(() => {
      setTime((curr) => {
        if (curr === 0) {
          return 0;
        } else {
          return curr - 1;
        }
      });
    }, 1000);
  }, []);

  useEffect(() => {
    data.forEach((ele, index) => {
      const x = typeStr[index];
      console.log(typeStr[index], ele.type);
      if (ele.type === x) {
        setData({ ...ele, on: 'on' });
      } else {
        return ele;
      }
    });
  }, []);

  console.log('on', data);

  return (
    <div className='p-10 max-w-[500px] mx-auto'>
      <div className='flex gap-5 items-center'>
        <div className='flex flex-col gap-4'>
          {data.map((item) => {
            let color = item.type;
            return (
              <div
                key={item.type}
                className={`w-10 h-10 rounded-full border-2 transition-all flex items-center }`}
                style={{ background: color, borderColor: color }}
              >
                <span className='pl-[50px] whitespace-nowrap'>
                  {item.text} {time}
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
