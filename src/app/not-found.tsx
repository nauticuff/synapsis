'use client'

import { useEffect } from "react"
// import CheckTheme from "./HelperFunctions/CheckTheme"
import Navbar from "@/components/Navbar"

export default function NotFound() {

  useEffect(() => {
    try {
      document.body.id = 'app'
    } catch (error) {

    }
  }, [])


  return (
    <>
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

