import React from 'react'
import * as LuIcons from 'react-icons/lu';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
   {
      title: 'My Deals',
      path: '/',
      icon: <LuIcons.LuClipboardList/>,
      cName: 'nav-text'
   },
   {
      title: 'Create a New Referral',
      path: '/newreferral',
      icon: <IoIcons.IoIosCreate/>,
      cName: 'nav-text'
   },
   {
      title: 'Track Progress',
      path: '/trackprogress',
      icon: <GiIcons.GiProgression/>,
      cName: 'nav-text'
   },
   {
      title: 'Leaderboard',
      path: '/leaderboard',
      icon: <MdIcons.MdLeaderboard/>,
      cName: 'nav-text'
   },
   {
      title: 'My Profile',
      path: '/myprofile',
      icon: <CgIcons.CgProfile/>,
      cName: 'nav-text'
   },
   {
      title: 'Support',
      path: '/support',
      icon: <BiIcons.BiSupport/>,
      cName: 'nav-text'
   }
];