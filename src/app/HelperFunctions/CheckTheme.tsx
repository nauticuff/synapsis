
// import { useEffect } from "react"

export default function CheckTheme() {

    // useEffect(() => {
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (error) {
        
      }
      // if(typeof window !== 'undefined'){
      // }
    // }, [])
    
    //if (typeof window !== "undefined") {}

  return null
}
