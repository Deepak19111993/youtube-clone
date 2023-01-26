import React from 'react';
import { Link } from 'react-router-dom';
import VideoLengthTime from '../VideoLengthTime/VideoLengthTime';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video?.thumbnails?.[0]?.url}
            alt='images'
          />
          {video?.lengthSeconds && (
            <VideoLengthTime time={video?.lengthSeconds} />
          )}
        </div>
        <div className='flex text-white mt-3'>
          <div className='flex items-start'>
            <div className='flex w-9 h-9 rounded-full overflow-hidden'>
              <img
                className='h-full w-full object-cover'
                src={video?.author?.avatar?.[0]?.url}
                alt='images'
              />
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-[12px] md:text-[14px] text-white'>
              {video?.title}
            </span>
            <span className='text-[12px] mt-2 text-white/[.7] font-semibold flex items-center'>
              {video?.author?.title}
              {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className='text-white/[.5] text-[12px] ml-1' />
              )}
            </span>
            <div className='flex text-[12px] font-semibold text-white/[.7] truncate overflow-hidden items-center'>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</span>
              <span className='flex text-[24px] leading-none font-bold text-white/[.7] relative top-[-5px] mx-1'>
                .
              </span>
              <span className='truncate'>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
