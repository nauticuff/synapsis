'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Button from '@mui/material/Button';

interface BlogCardProps {
  tags?: string[];
  title: string;
  avatar?: string;
  author?: string;
  category: string;
  description?: string;
  hero?: string;
  animationDelay: number;
}

export default function BlogCard({
  tags,
  title,
  avatar,
  author,
  category,
  description,
  hero,
  animationDelay
}: BlogCardProps): JSX.Element {

  return (
    <div style={{animationDelay: `${(1.1 + animationDelay).toFixed(2)}s`}} className='card content-appear relative w-full h-[400px] xs:h-[525px]'>
      <div className='card-inner xs:w-[60vw] md:w-full'>
        <div className='card-face face-front border-black border-2 rounded-tl-[60px] rounded-br-[60px]'>
          <div className='h-full flex flex-col justify-between'>
            <div className='p-7 rounded-full flex flex-col gap-12'>
              <div>
                {tags && tags.map((tag) => (
                  <p
                    key={tag}
                    className='text-[17px] uppercase rounded-full border-black border-1 w-fit px-2 py-0 tracking-tighter leading-4 font-medium'
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className='flex flex-col gap-6'>
                <h3 className='text-[27px] font-semibold leading-[1] tracking-tight'>{title}</h3>
                <div className='flex items-center'>
                  {avatar &&
                    <Image
                      className='mr-2 rounded-full'
                      src={avatar}
                      alt='user'
                      height={40}
                      width={40}
                      priority={true}
                    >
                    </Image>
                  }
                  <p className='uppercase text-[14px] font-semibold tracking-tight'>{author}</p>
                </div>
              </div>
            </div>
            <div className='py-4 px-7 flex items-center justify-between border-black border-t-2'>
              <p className='uppercase text-[14px] font-semibold'>{category}</p>
              <Link className='rounded-full border-black border-2 p-2' href='/Blog1'>
                <ArrowForwardIcon sx={{ height: '25px', width: '25px' }} />
              </Link>
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden card-face face-back border-black border-2 rounded-tr-[60px] rounded-bl-[60px] h-full w-full'>
          <Image
            className='object-cover object-center card-image rounded-[inherit] brightness-[.6] z-[-2]'
            src='https://plus.unsplash.com/premium_photo-1681566468589-ae19cf1268ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            //src={'https://images.unsplash.com/photo-1597253702831-d6a6d0be4f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTA0fHxmYXNoaW9ufGVufDB8fHx8MTY4NzI2NjMyMXww&ixlib=rb-4.0.3&q=80&w=1080'}
            alt='aesthetic'
            fill={true}
            sizes='(max-width: 542px) 100vw, (max-width: 1026px) 50vw, 33vw'
            priority={true}
          // layout='fill'
          // objectFit='cover'
          // objectPosition='center'
          />
          <div className='h-2/5 w-full bottom-0 card-gradient absolute'></div>
          <div className='h-full flex flex-col justify-between p-7 text-white relative z-10'>
            <div className='rounded-full flex flex-col gap-12'>
              <p className='text-[17px] uppercase rounded-full border-white border-1 w-fit px-2 py-0 tracking-tighter leading-4 font-medium'>
                {tags && tags[0]}
              </p>
              <p className='font-semibold tracking-tight'>Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='uppercase text-[14px] font-semibold'>Modern Style</p>
              <Link className='rounded-full border-white border-2 p-2' href='/Blog2'>
                <ArrowForwardIcon sx={{ height: '25px', width: '25px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
