
'use client'

import { useState } from 'react';
import Button from '@mui/material/Button';


export default function TestButton() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <p>{count}</p>
        <Button
            className='text-orange-500 text-5xl p-1'
            onClick={() => setCount(count + 1)}
        >
            Testing
        </Button>

    </div>
  )
}



