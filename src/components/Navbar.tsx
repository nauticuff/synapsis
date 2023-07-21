'use client'

import { useRef, useState } from 'react'
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import MenuButton from './MenuButton';

export default function Navbar({ menuButton }: any) {
  const [state, setState] = useState(false)

  function toggleDrawer(event: React.KeyboardEvent | React.MouseEvent) {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <nav className=''>
      <div className='divider-appear w-full h-[2px] bg-black'></div>
      <div className='flex items-center justify-between py-2'>
        <Link onMouseLeave={e => e.currentTarget.blur()} className='focused-icon transition-colors hover:bg-gray-400 rounded-full' href='/'>
          <Image className='content-appear' src='/bubbles.svg' alt='bubbles logo' width={30} height={30} />
        </Link>
        <ul className='content-appear hidden xs:flex xs:items-center uppercase text-[15px] font-semibold'>
          <li className='overflow-hidden py-1'>
            <Link onMouseLeave={e => e.currentTarget.blur()} className='px-3 py-2 link-hover focused-button' href='#'>
              Home
            </Link>
          </li>
          <li className='overflow-hidden py-1'>
            <Link onMouseLeave={e => e.currentTarget.blur()} className='px-3 py-2 link-hover focused-button' href='#'>
              About Us
            </Link>
          </li>
          <li className='overflow-hidden py-1'>
            <Link onMouseLeave={e => e.currentTarget.blur()} className='px-3 py-2 link-hover focused-button' href='#'>
              Portfolio
            </Link>
          </li>
          <li className='overflow-hidden py-1'>
            <Link onMouseLeave={e => e.currentTarget.blur()} className='px-3 py-2 link-hover focused-button' href='#'>
              Contact
            </Link>
          </li>
        </ul>
        <Button variant='text' className='xs:hidden font-semibold hover:bg-gray-100 text-black dark:text-white' onClick={toggleDrawer}>
          Menu
        </Button>
        <Drawer
          classes={{ paper: 'bg-[#e9e4de] dark:bg-grey-400' }}
          anchor='right'
          open={state}
          onClose={toggleDrawer}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
          >
            <ul className='flex flex-col gap-3 relative p-4'>
              <li className='transition-colors flex items-center justify-between'>
                <Link className='hover:text-sky-300 focused-button' href='#'>
                  Home
                </Link>
                <IconButton aria-label='close menu' onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </li>
              <li className='hover:bg-slate-200'>
                <Link href='/Blah'>To Nowhere</Link>
              </li>
              <li className='hover:bg-slate-200'>Click</li>
              <li className='hover:bg-slate-200'>
                <ThemeToggle />
              </li>
            </ul>
          </Box>
        </Drawer>
      </div>
    </nav>
  )
}
