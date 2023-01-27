import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/ContextApi';
import Loader from '../../Shared/Loader/Loader';
import logo from '../../assets/images/yt-logo.png';
import logoMobile from '../../assets/images/yt-logo-mobile.png';
import { CgClose } from 'react-icons/cg';
import { SlMenu } from 'react-icons/sl';
import { GrSearch } from 'react-icons/gr';

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState();

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const searchQueryHandler = (e) => {
    if ((e.key === 'Enter' || e === 'searchButton') && searchQuery.length > 0) {
      navigate(`/searchresult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split('/').filter(Boolean)?.[0];
  console.log('pagename', pageName);

  return (
    <div className='sticky top-0 z-10 flex items-center justify-between h-14 px-4 md:px-5 text-white bg-black dark:bg-black py-2'>
      {loading && <Loader />}
      <div className='flex h-5 items-center'>
        {pageName !== 'video' && (
          <div
            className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/0.6'
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className='text-white text-xl' />
            ) : (
              <SlMenu className='text-white text-xl' />
            )}
          </div>
        )}
        {mobileMenu ? (
          <Link to='/' className='h-5 flex items-center'>
            <img className='h-full' src={logoMobile} alt='logoMobile' />
          </Link>
        ) : (
          <Link to='/' className='h-5 flex items-center'>
            <img className='h-full' src={logo} alt='logo' />
          </Link>
        )}
      </div>
      <div className='group flex items-center'>
        <div className='flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within::pl-0'>
          {/* <div className='w-10 items-center justify-center hidden xl:flex group-focus-within:md:flex'>
            <GrSearch className='text-white text-xl' />
          </div> */}
          <input
            type='text'
            className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1] text-white'>
          <GrSearch className='text-white text-xl stroke-white' />
        </button>
      </div>
      <div className='flex items-center '>
        <div className='hidden md:flex'>
          <div className='flex h-8 w-8  overflow-hidden rounded-full md:ml-4'>
            <img
              src='https://xsgames.co/randomusers/assets/avatars/male/48.jpg'
              alt='avtar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
