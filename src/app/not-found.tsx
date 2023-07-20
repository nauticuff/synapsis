'use client'

import CheckTheme from "./HelperFunctions/CheckTheme"
import Navbar from "@/components/Navbar"

export default function notFound() {

  return (

    <div className='p-5 bg-white dark:bg-black text-black dark:text-white'>
      <CheckTheme />
      <Navbar />
      <div className='h-screen grid place-items-center'>
        <p>
          Error 404. This page could not be found.
        </p>
      </div>
      <footer className='p-4'>
        <p>Footer logo</p>
      </footer>
    </div>

  )
}

