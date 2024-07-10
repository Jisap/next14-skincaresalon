"use client"

import React, { useContext } from 'react'
import { CursorContext } from '@/components/CursorContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Form from '@/components/Form'



const Treatments = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className='container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0'>
        <div className='flex flex-col gap-12 xl:flex-row h-full'>
          {/* text */}
          <div>
            <h3 className='h3 mb-8 text-center xl:text-left'>
              Contact info
            </h3>
            {/* items */}
            <div className='flex flex-col items-center xl:items-start gap-12'>
              {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src="/assets/contact/pin.svg" fill alt="" />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Address</h4>
                  <p className='leading-relaxed'>
                    123/45 Elm St, Suite 800
                    <br />
                    Los Angeles, CA 90012
                  </p> 
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src="/assets/contact/phone.svg" fill alt="" />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Phone number</h4>
                  <div className='pt-1 flex-1'>
                    <p>
                      Phone: +99(0) 999 333 667
                    </p>
                    <p>
                      Fax: +99(0) 999 322 678
                    </p>
                  </div>
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className='flex items-start gap-4'>
                {/* icon */}
                <div className='relative w-[36px] h-[36px]'>
                  <Image src="/assets/contact/email.svg" fill alt="" />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Email address</h4>
                  <div className='flex flex-col gap-1'>
                    <p>info@youremail</p>
                    <p>supportinfo@youremail</p>
                  </div>
                </div>
              </div>
              {/* end item */}
            </div>
          </div>
          {/* form */}
          <div>
            <Form />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Treatments