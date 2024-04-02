import HorizontalSlider from '@/components/HorizontalSlider'
import Layout from '@/components/Layout'
import Pill from '@/components/Pill'
import FloatingCarouselScene from '@/components/canvas/FloatingCarouselScene'
import { featuredProjects } from '@/content'
import { IProject } from '@/types/content'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const lngs = locales || ['en', 'pt', 'es']

  const paths = featuredProjects.flatMap((project) =>
    lngs.map((locale) => ({
      params: { id: project.id },
      locale: locale,
    })),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  return {
    props: {
      project: featuredProjects.find((el) => el.id === params?.id),
      params,
      ...(await serverSideTranslations(locale ?? 'en', ['projects', 'common'])),
    },
  }
}

const ProjectPage = ({ project, params }: { project: IProject; params: { id: string } }) => {
  const { t, i18n } = useTranslation('projects')
  const { id, workingFor, title, year, tools, images } = project
  return (
    <Layout>
      <div className='pt-60 lg:pt-52'>
        <div className='box txt-sm mb-12 flex flex-col gap-8  lg:flex-row lg:gap-16 '>
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
              <video
                className={`w-full rounded-xl ${images.featured.withFrame && 'border-8 border-gray-950'}`}
                autoPlay
                muted
                loop
              >
                <source src={images.featured.url} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
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
      </div>
      <div className='relative w-full'>
        {!!images.carousel.length && (
          <>
            <div className=' w-full text-center font-mono text-6xl uppercase'>
              <Marquee autoFill className='overflow-hidden border-y border-gray-950 pb-1'>
                <span className='mr-3'>PROJECT OUTPUTS</span>
              </Marquee>
            </div>
            <div className='mx-auto hidden h-dvh w-full md:block 2xl:w-4/5'>
              <FloatingCarouselScene cards={images.carousel} />
            </div>
            <div className='mx-auto  flex size-full items-center md:hidden 2xl:w-4/5'>
              <HorizontalSlider images={images.carousel.map((el) => el.image)} />
            </div>

            <div className=' w-full text-center font-mono text-6xl uppercase'>
              <Marquee autoFill className='overflow-hidden border-y border-gray-950 pb-1'>
                <span className='mr-3'>PROJECT OUTPUTS</span>
              </Marquee>
            </div>
          </>
        )}
      </div>

      <div className='w-full bg-gray-950  text-gray-100  '>
        <div className='mx-auto flex min-h-dvh  w-full items-center justify-center gap-16 bg-gray-950  p-4 text-gray-100  md:p-24 2xl:w-4/5 2xl:text-lg '>
          {images.final.type === 'image' ? (
            <Image
              src={images.final.url}
              alt='project hero'
              width={images.final.width}
              height={images.final.height}
              priority
              className='rounded md:rounded-xl'
            />
          ) : (
            <video className='max-w-[50%]' autoPlay muted loop>
              <source src={images.final.url} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
