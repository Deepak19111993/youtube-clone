import { abbreviateNumber } from 'js-abbreviation-number';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Context } from '../../Context/ContextApi';
import { fetchDataApi } from '../../utils/api';
import SuggestionVideoCard from '../SuggestionVideoCard/SuggestionVideoCard';

const VideoDetail = () => {
  const [video, setVideo] = useState();
  const [relativeVideos, setRelativeVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelativeVideos(res);
      setLoading(false);
    });
  };

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-350px)]  xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer
              url={`https://wwww.youtube.com/watch?v=${id}`}
              controls
              width={'100%'}
              height={'100%'}
              style={{ background: '#000' }}
            />
          </div>
          <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {video?.title}
          </div>
          <div className='flex justify-between flex-col md:flex-row mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                  <img
                    className='h-full w-full object-cover'
                    src={video?.author?.avatar?.[0]?.url}
                    alt='images'
                  />
                </div>
              </div>
              <div className='flex flex-col ml-3'>
                <div className='text-white text-md font-semibold flex items-center'>
                  {video?.author?.title}
                  {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className='text-white/[.5] text-[12px] ml-1' />
                  )}
                </div>
                <div className='text-white/[.7] text-sm '>
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className='flex text-white mt-4 md:mt-0'>
              <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[.15]'>
                <AiOutlineLike className='text-xl text-white mr-2' />
                <span>{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>
              <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[.15] ml-4'>
                <AiOutlineLike className='text-xl text-white mr-2' />
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]'>
          {relativeVideos?.contents.map(
            (item) =>
              item?.type === 'video' && (
                <SuggestionVideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
