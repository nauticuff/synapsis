'use client'

import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Tooltip } from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import DevicesIcon from '@mui/icons-material/Devices';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (theme: string) => {
    setAnchorEl(null);
    if(typeof theme === 'string'){
      handleTheme(theme)
    }
  };

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function handleTheme(themeChoice: string) {

    if (themeChoice === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = themeChoice;
    }
  }

  const ThemeDesc = () => {
    if (localStorage.theme === 'light') {
      return (
        <>
          <LightModeIcon className='mr-2'/><span className='text-[16px]'>Light</span> 
        </>
      )
    } else if (localStorage.theme === 'dark') {
      return (

        <>
         <DarkModeIcon className='mr-2'/><span className='text-[16px]'>Dark</span> 
        </>
      )
    } else if (localStorage.theme === undefined) {
      return (
        <>
          <DevicesIcon className='mr-2'/><span className='text-[16px]'>System</span> 
        </>
      )
    }
  }


  return (
    <div className='flex items-center justify-between'>
      {/* <Button
        className='text-red-600'
        id="theme-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Theme
      </Button> */}
      <div>
        <p className=''>
          Switch theme
        </p>
      </div>
      <div>
        <button
          className='border-black border-2 border-solid text-black px-3 py-2 rounded-md'
          id="theme-button"
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ThemeDesc />
        </button>
        <Menu
          id="theme-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'theme-button',
          }}
        >
          <MenuItem className='' onClick={() => handleClose('light')}>
            <LightModeIcon className='mr-3' /> Light
          </MenuItem>
          <MenuItem className='' onClick={() => handleClose('dark')}>
            <DarkModeIcon className='mr-3' /> Dark
          </MenuItem>
          <MenuItem className='' onClick={() => handleClose('system')}>
            <DevicesIcon className='mr-3' /> System
          </MenuItem>
        </Menu>
      </div>
    </div>
  )

};

