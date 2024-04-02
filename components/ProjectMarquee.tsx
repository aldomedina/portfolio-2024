import { IProject } from '@/types/content'
import Marquee from 'react-fast-marquee'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProjectMarquee = ({ title, imageUrl, ratio, route, blurDataUrl }: IProject) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(route)}
      className='cursor-pointer border-t border-gray-600 pb-3 sm:hover:bg-orange-600'
    >
      <Marquee autoFill className='z-0 overflow-hidden' speed={20}>
        <span className='mr-4 select-none text-9xl uppercase	'>{title}</span>
        <div className='mr-4 mt-4 rounded border-2 border-gray-950'>
          <Image
            src={imageUrl}
            alt='teapot'
            width={100 * ratio}
            height={100}
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </div>
      </Marquee>
    </div>
  )
}

export default ProjectMarquee
