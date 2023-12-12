import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button'
import { useState } from 'react';


type CategoryPillsProps = {
  categories: string[];
  setSelectCategory : (category : string) => void;
  selectCategory : string
}
  const TRANSLATE_Amount = 200;
function CategoryPills({ categories , setSelectCategory , selectCategory }: CategoryPillsProps) {
  const [translate , setTranslate] = useState(600)
  const [isLeftshow , setIsLeftShow] = useState(true);
  const [isRightShow , setIsRightShow] = useState(false)
  return (
    <div className='overflow-x-hidden relative'>
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-contend]' style={{transform : `translateX(-${translate}px)`}}>
        {
          categories.map((category) => (
            <Button key={category} onClick={() => setSelectCategory(category)} className='py-1 px-3 rounded-lg whitespace-nowrap' variant={selectCategory === category ? 'dark' : 'default'}>
              {category}
            </Button>
          ))
        }
      </div>
      {
        isLeftshow && (
          <div className=' absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'>
      <Button variant='ghost' size='icon' className=' h-full aspect-square w-auto p-1.5' onClick={() => {
        setTranslate(translate=> {
          const newTranslate = translate - TRANSLATE_Amount
          if(newTranslate <= 0) return 0 
          return newTranslate 
        })
      }}>
        <ChevronLeft />
      </Button>
      </div>
        )
      }
      {
        isRightShow && (
          <div className=' absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
      <Button variant='ghost' size='icon' className=' h-full aspect-square w-auto p-1.5'>
        <ChevronRight />
      </Button>
      </div>
        )
      }
    </div>
  )
}

export default CategoryPills