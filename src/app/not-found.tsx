'use client'

import { useEffect } from "react"
import CheckTheme from "./HelperFunctions/CheckTheme"
import Navbar from "@/components/Navbar"

export default function NotFound() {

  useEffect(() => {
    try {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      
    }
    document.body.id = 'app'
  }, [])


  return (
    <>
        {/* <CheckTheme /> */}
      <div className='p-5 bg-white dark:bg-black text-black dark:text-white'>
      <nav className="">
        <Navbar />
      </nav>      
      <main >
        <div className='h-screen grid place-items-center'>
          <p>
            Error 404. This page could not be found.
          </p>
        </div>
      </main>
      <footer className='p-4'>
        <p>Footer logo</p>
      </footer>
      </div>
    </>

  )
}

