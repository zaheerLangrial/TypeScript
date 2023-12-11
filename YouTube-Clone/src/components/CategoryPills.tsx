import React from 'react'
import { Button } from './Button'

function CategoryPills() {
  return (
    <div className='overflow-x-hidden relative'>
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-contend]'>
        <Button className='py-1 px-3 rounded-lg whitespace-nowrap' variant='dark'>
          All
        </Button>
      </div>
    </div>
  )
}

export default CategoryPills