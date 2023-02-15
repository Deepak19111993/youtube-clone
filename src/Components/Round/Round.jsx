import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Round = () => {
  const [distWidth, setDistWidth] = useState([]);
  const [domelements, setDomElements] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  // const [distLeft, setDistLeft] = useState();
  // const [distTop, setDistTop] = useState();
  // const [randomLeft, setRandomLeft] = useState();
  // const [randomTop, setRandomTop] = useState();

  // const randomMove = () => {
  //   let minLeft = Math.floor(distLeft - 10);
  //   let maxLeft = Math.floor(distLeft + 10);
  //   let minTop = Math.floor(distTop - 10);
  //   let maxTop = Math.floor(distTop + 10);

  //   console.log('random', Math.random());
  //   console.log('distLeft', distLeft);

  //   setRandomLeft(Math.floor(Math.random() * 50));
  //   setRandomTop(Math.floor(Math.random() * 50));
  // };

  const boxRef = useRef();
  const getElements = () => {
    const lengthEle = document.getElementsByClassName('round').length;
    let elements = [];
    let coordinatesArr = [];
    for (let i = 1; i <= lengthEle; i++) {
      const element = document.getElementById(`round${i}`);
      console.log('elellele', element.getClientRects());
      const elementCoordinate = {
        x: element.getClientRects()[0].x,
        y: element.getClientRects()[0].y,
      };

      coordinatesArr.push(elementCoordinate);
      elements.push({ left: element.offsetLeft, top: element.offsetTop });
    }
    return { elements, coordinatesArr };
  };

  useEffect(() => {
    const { elements, coordinatesArr } = getElements();
    setDomElements(elements);
    setCoordinates(coordinatesArr);

    // randomMove();

    gsap.to('.round', {
      x: '+=15',
      y: '+=15',
      z: '+=15',
      duration: 3,
      // yoyo: true,
      repeat: -1,
      repeatDelay: 0.5,
      stagger: 0.1,
      // snap: true,
    });

    // gsap.to('.line', {
    //   rotate: distWidth - distTop,
    //   duration: 3,
    // });
  }, []);

  useEffect(() => {
    const lengthEle = document.getElementsByClassName('round').length;
    let distances = [];
    for (let i = 0; i < lengthEle; i++) {
      let x = domelements[i + 1]?.top - domelements[i]?.top;
      let y = domelements[i + 1]?.left - domelements[i]?.left;
      const distnace = Math.sqrt(x * x + y * y);
      distances.push(Math.floor(distnace));
    }

    setDistWidth(distances);
  }, [domelements]);

  console.log('sssssssssssss', coordinates, distWidth);
  console.log('domelements', domelements);
  return (
    <div className='round-wrapper'>
      <div id='round1' className='round' ref={boxRef}>
        <div
          className='line'
          id='id1'
          style={{
            width: distWidth[0],
            left: '50px',
            top: '50px',
            transform: `rotate(${
              (Math.atan2(
                coordinates[1]?.y - coordinates[0]?.y,
                coordinates[1]?.x - coordinates[0]?.x
              ) *
                180) /
              Math.PI
            }deg)`,
          }}
        ></div>
      </div>

      <div id='round2' className='round'>
        <div
          className='line'
          id='id2'
          style={{
            width: distWidth[1],
            left: '50px',
            top: '50px',
            transform: `rotate(${
              (Math.atan2(
                coordinates[2]?.y - coordinates[1]?.y,
                coordinates[2]?.x - coordinates[1]?.x
              ) *
                180) /
              Math.PI
            }deg)`,
          }}
        ></div>
      </div>

      <div id='round3' className='round'>
        <div
          className='line'
          id='id3'
          style={{
            width: distWidth[2],
            left: '50px',
            top: '50px',
            transform: `rotate(${
              (Math.atan2(
                coordinates[3]?.y - coordinates[2]?.y,
                coordinates[3]?.x - coordinates[2]?.x
              ) *
                180) /
              Math.PI
            }deg)`,
          }}
        ></div>
      </div>

      <div id='round4' className='round'>
        <div
          className='line'
          id='id4'
          style={{
            width: distWidth[3],
            left: '50px',
            top: '50px',
            transform: `rotate(${
              (Math.atan2(
                coordinates[4]?.y - coordinates[3]?.y,
                coordinates[4]?.x - coordinates[3]?.x
              ) *
                180) /
              Math.PI
            }deg)`,
          }}
        ></div>
      </div>

      <div id='round5' className='round'>
        <div
          className='line'
          id='id5'
          style={{
            width: distWidth[4],
            left: '50px',
            top: '50px',
            transform: `rotate(${
              (Math.atan2(
                coordinates[5]?.y - coordinates[4]?.y,
                coordinates[5]?.x - coordinates[4]?.x
              ) *
                180) /
              Math.PI
            }deg)`,
          }}
        ></div>
      </div>
      <div id='round6' className='round'></div>
    </div>
  );
};

export default Round;
