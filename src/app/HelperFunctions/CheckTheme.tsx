/**
 * This is an empty component that checks the user's color preference and adds/removes
 * dark class to html tag. It is necessary for dark mode in not-found.tsx
 * 
 */
export default function CheckTheme() {
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch (error) {

  }
  return null
}
