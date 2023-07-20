'use client'

import { useEffect } from "react"

export default function CheckTheme() {

    useEffect(() => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])
    
    //if (typeof window !== "undefined") {}

  return null
}
