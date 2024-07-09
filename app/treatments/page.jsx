"use client"

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CursorContext } from '@/components/CursorContext'



const Treatments = () => {
  
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className='container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0'>
        <div className='w-full h-full flex items-center justify-between'>
          {/* text */}
          <div className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto'>
            <h2 className='h2 mb-6 mx-auto ,max-w-[540px] xl:mas-w-none'>Indulge in out Luxurious Treatments</h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>
              Tailored skincare solutions for a healty complexion, offering customized care for radiant skin.
            </p>
            {/* items */}
            <div>
              {/* item */}
              <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
                <div className='flex items-center gap-[12px] mb-2'>
                  <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]'></div>
                  <h3 className='text-2xl'>
                    Classic Facial
                  </h3>
                </div>
              </div>
            </div>
            {/* btn */}
            <button className='btn mx-auto xl:mx-0'>Discover more</button>
          </div>
          {/* image */}
          <div className='hidden relative xl:flex w-[384px] h-[534px]'>
            <Image 
              src='/assets/treatments/img.jpg'
              fill
              quality={100}
              alt=''
              className='object-contain'
            />
          </div>
        </div>  
      </div>
    </motion.section>
  )
}

export default Treatments