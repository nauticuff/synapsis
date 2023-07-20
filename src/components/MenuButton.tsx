import Button from '@mui/material/Button'

export default function MenuButton({handleClick}: any) {
  return (
    <Button variant='text' className='font-semibold hover:bg-gray-100 text-black dark:text-white md:hidden' onClick={handleClick}>
        Menu
    </Button>
  )
}
