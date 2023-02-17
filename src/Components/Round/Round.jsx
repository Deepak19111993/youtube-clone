import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Round = () => {
  const [distWidth, setDistWidth] = useState([]);
  const [domelements, setDomElements] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [rotateValue, setRotateValue] = useState(0);

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

  const getWidth = (newCoordinates) => {
    let widthArr = [];
    newCoordinates.forEach((coordinate, index) => {
      if (newCoordinates.length - 2 === index) {
        const x = newCoordinates[index + 1]?.x - coordinate.x;
        const y = newCoordinates[index + 1]?.y - coordinate.y;
        widthArr.push(Math.floor(Math.sqrt(x * x + y * y)));
      }
    });
    return widthArr;
  };

  useEffect(() => {
    const { coordinatesArr, elements } = getElements();
    setDomElements(elements);
    setCoordinates(coordinatesArr);
    setDistWidth(getWidth(coordinatesArr));
  }, [coordinates, domelements, distWidth]);

  useEffect(() => {
    setTimeout(() => {
      const x = Math.floor(Math.random() * 100);
      setRotateValue(x);
    }, 200);

    const tl = gsap.timeline({ repeat: -1 });

    tl.to('.round-wrapper', {
      x: 'random([0, 2, 3], true)',
      y: 'random([0, 2, 3], true)',
      z: 'random([0, 2, 3], true)',
      duration: 10,
      ease: 'elastic',
      // repeat: -1,
    });

    tl.to('.round', {
      x: 'random(0,50,8)',
      y: 'random(0,50,8)',
      z: 'random(0,50,8)',
      // repeat: -1,
      duration: 10,
      stagger: 0.5,
      ease: 'elastic',
    });

    // gsap.to('.line', {
    //   duration: 0.5,
    //   ease: 'elastic',
    // });
  }, [rotateValue]);

  // console.log('rotateValue', rotateValue);

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
  }, [domelements, rotateValue]);

  console.log('@@@coordinates', distWidth);
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
