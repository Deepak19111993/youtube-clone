import React from 'react';

import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

export const categories = [
  { name: 'New', type: 'home' },
  { name: 'Trending', type: 'category' },
  { name: 'Music', type: 'category' },
  { name: 'Films', type: 'category' },
  { name: 'Live', type: 'category' },
  { name: 'Gaming', type: 'category' },
  { name: 'News', type: 'category' },
  { name: 'Sports', type: 'category' },
  { name: 'Learning', type: 'category' },
  {
    name: 'Fashion & beauty',

    type: 'category',
    divider: true,
  },
  { name: 'Settings', type: 'menu' },
  { name: 'Report History', type: 'menu' },
  { name: 'Help', type: 'menu' },
  { name: 'Send feedback', type: 'menu' },
];
