'use client'

import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ThemeToggle (){
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (theme: string) => {
    setAnchorEl(null);
    handleTheme(theme)
  };

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function handleTheme(themeChoice: string){

    if(themeChoice === 'system'){
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = themeChoice;
    }
  }


  return (
    <div>
      <Button
        className='text-red-600'
        id="theme-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Theme
      </Button>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
      >
        <MenuItem onClick={() => handleClose('light')}>Light</MenuItem>
        <MenuItem onClick={() => handleClose('dark')}>Dark</MenuItem>
        <MenuItem onClick={() => handleClose('system')}>System</MenuItem>
      </Menu>
    </div>
  )

};

