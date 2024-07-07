"use client"

import { CursorContext } from '@/components/CursorContext'
import StatsItem from '@/components/StatsItem'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useContext } from 'react'

const About = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { delay: 2}}}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className='container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0'>
        <div className='w-full h-full flex flex-col xl:flex-row items-center justify-between'>
          {/* image */}
          <div className='relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0'>
            <Image 
              src="/assets/about/img.jpg" 
              fill
              quality={100}
              priorityalt=''
              className='object-contain'
            />
          </div>
          {/* text */}
          <div className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0'>
            <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>
              Commited to Your Skin's Health and Beauty
            </h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>
              Tailored skincare solutions for a healty complexion, offering customized care for radiant skin.
            </p>
            {/* items */}
            <div className='grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0'>
              <div>
                <StatsItem 
                  countNum={13}
                  text='Years On Market'
                />
              </div>
              <div>
                <StatsItem 
                  countNum={35}
                  countText='k+'
                  text='Happy Clients'
                />
              </div>
              <div>
                <StatsItem 
                  countNum={97}
                  countText='%'
                  text='Natural Ingredients'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About