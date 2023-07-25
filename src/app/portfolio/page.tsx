'use client'

import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'

import DevicesIcon from '@mui/icons-material/Devices';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';

export default function Portfolio() {

  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme + ' mode' : 'system preference');

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function handleTheme(themeChoice: string) {
    if (themeChoice === 'system preference') {
      localStorage.removeItem('theme');
    } else if (themeChoice === 'light mode') {
      localStorage.theme = 'light';
    } else if (themeChoice === 'dark mode') {
      localStorage.theme = 'dark';
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as string);
    handleTheme(event.target.value as string)
  };

  return (
    <div className='bg-yellow-200 dark:bg-black h-screen dark:text-white w-full grid place-items-center'>
      <Button className='bg-purple-500 dark:bg-pink-600 hover:bg-black dark:hover:bg-black dark:text-white'>
        Hello Test Here
      </Button>
      <p className='text-4xl bg-orange-600 font-bold shadow-lg rounded-md p-4'>Is this styled?</p>
      <Select
        value={theme}
        onChange={handleChange}
        displayEmpty
        autoWidth
        // label="Theme menu"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value='light mode'>
          <LightModeIcon className='mr-3' /> Light
        </MenuItem>
        <MenuItem value='dark mode'>
          <DarkModeIcon className='mr-3' /> Dark
        </MenuItem>
        <MenuItem value='system preference'>
          <DevicesIcon className='mr-3' /> System
        </MenuItem>
      </Select>
    </div>
  )
}
