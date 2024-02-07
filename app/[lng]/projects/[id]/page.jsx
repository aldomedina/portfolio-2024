import { useTranslation } from '@/i18n'
import { featuredProjects } from '../content'
import Pill from '@/components/dom/Pill'
import Image from 'next/image'
import Carousel from './components/Carousel'
import Marquee from 'react-fast-marquee'

export const dynamicParams = false

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    id: project.id,
  }))
}

export default async function Page({ params: { id, lng } }) {
  const { t } = await useTranslation(lng, 'projects')
  const { id: projectId, workingFor, title, year, tools, ratio, images } = featuredProjects.find((el) => el.id === id)

  return (
    <>
      <div className='mx-auto mb-12 mt-60 flex w-full flex-col  gap-8 p-4 md:p-8 lg:mt-40 lg:flex-row lg:gap-16 2xl:w-4/5 2xl:text-lg'>
        <div className='basis-2/3 '>
          <span>{year}</span>
          <div className='mb-8 font-mono text-[21vw]  uppercase leading-none lg:text-[9vw]'>{title}</div>

          {images.featured.type === 'image' ? (
            <Image
              src={images.featured.url}
              alt='project hero'
              width={images.featured.width}
              height={images.featured.height}
              priority
              className='rounded-xl border-8 border-gray-950'
            />
          ) : (
            <div>video</div>
          )}
        </div>
        <div className='basis-1/3'>
          <span>For</span>
          <div className='mb-8 font-mono text-[12vw] uppercase leading-none lg:text-[6vw]'>
            {workingFor.split(' ').map((el) => (
              <div key={el}>
                {el}
                <br />
              </div>
            ))}
          </div>
          <div className='mb-8 max-w-80'>{t(`${id}-body`)}</div>
          <div className='flex flex-col gap-2'>
            {tools.map((el) => (
              <Pill key={el} dark>
                {el}
              </Pill>
            ))}
          </div>
        </div>
      </div>
      {!!images.carousel.length && (
        <div className='relative h-dvh w-full'>
          <Carousel cards={images.carousel} />
          <div className=' absolute top-0 w-full text-center font-mono text-6xl uppercase'>
            <Marquee autoFill>
              <span className='mr-3'>PROJECT OUTPUTS</span>
            </Marquee>
          </div>
          <div className=' absolute bottom-0 w-full text-center font-mono text-6xl uppercase'>
            <Marquee autoFill>
              <span className='mr-3'>PROJECT OUTPUTS</span>
            </Marquee>
          </div>
        </div>
      )}
      <div className='w-full bg-gray-950  text-gray-100  '>
        <div className='mx-auto flex min-h-dvh  w-full items-center gap-16 bg-gray-950  p-4 text-gray-100  md:p-24 2xl:w-4/5 2xl:text-lg '>
          {images.featured.type === 'image' ? (
            <Image
              src={images.final.url}
              alt='project hero'
              width={images.final.width}
              height={images.final.height}
              priority
              className='rounded-xl'
            />
          ) : (
            <div>video</div>
          )}
        </div>
      </div>
    </>
  )
}
