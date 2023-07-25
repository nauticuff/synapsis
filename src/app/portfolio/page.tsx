'use client'

import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select'

import DevicesIcon from '@mui/icons-material/Devices';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';

export default function Portfolio() {

  const [theme, setTheme] = useState('');

  useEffect(() => {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (localStorage.theme === 'light') {
      setTheme('light mode')
    } else if (localStorage.theme === 'dark') {
      setTheme('dark mode')
    } else if (localStorage.theme === undefined) {
      setTheme('system preference')
    }
  })

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
      <Button className='bg-purple-500 dark:bg-pink-600 dark:hover:bg-white dark:text-white'>
        Hello Test Here
      </Button>
      <p className='text-4xl bg-orange-600 font-bold shadow-lg rounded-md'>Is this styled?</p>
      <Select
        className='text-black dark:border-white border-1 dark:text-white'
        value={theme}
        onChange={handleChange}
        displayEmpty
        autoWidth
        // label="Theme menu"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value='light mode' className='bg-gray-400 text-white'>
          <LightModeIcon className='mr-3 dark:text-white' /> Light
        </MenuItem>
        <MenuItem value='dark mode'className='bg-gray-400 text-white'>
          <DarkModeIcon className='mr-3 dark:text-white' /> Dark
        </MenuItem>
        <MenuItem value='system preference' className='bg-gray-400 text-white'>
          <DevicesIcon className='mr-3 dark:text-white' /> System
        </MenuItem>
      </Select>
    </div>
  )
}
