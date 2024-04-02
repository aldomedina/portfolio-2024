import Image from 'next/image'
import React from 'react'

const HorizontalSlider = ({ images }: { images: string[] }) => {
  return (
    <div className='flex flex-wrap'>
      {images.map((el, i) => (
        <div key={`${el}${i}`} className='w-[50vw]'>
          <Image src={el} width={400} height={400} alt={'project output'} />
        </div>
      ))}
    </div>
  )
}

export default HorizontalSlider
