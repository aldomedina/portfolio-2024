import Layout from '@/components/Layout'
import Toolbox from '@/components/Toolbox'
import CardsScene from '@/components/canvas/CardsScene'
import { GetStaticProps } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Marquee from 'react-fast-marquee'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
  },
})

export default function Home() {
  const { t, i18n } = useTranslation('home')

  return (
    <Layout>
      <div className='flex h-dvh flex-col'>
        <div className='relative  h-4/5 overflow-hidden' />
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className='txt-sm box flex flex-auto flex-col justify-between gap-8 sm:flex-row lg:gap-16'
        >
          <div className='hidden max-w-52 flex-1 sm:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.above')} />
            </p>
          </div>
          <div className='flex-1 sm:max-w-52 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.creative')} />
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.skilled')} />
            </p>
          </div>
          <div className='hidden max-w-52 flex-1 md:block 2xl:max-w-72'>
            <p>
              <Trans i18nKey={t('hero.based')} />
            </p>
          </div>
        </div>
        <div className='flex flex-auto justify-center gap-2 pb-2 text-right'>
          <div className='animate-bounce'>↓</div>
        </div>
        <div className='absolute left-0 top-0 hidden size-full md:block'>
          <CardsScene />
        </div>
      </div>
      <div className='hidden gap-8 bg-gray-950 p-2 font-mono text-4xl leading-none text-gray-100 md:flex'>
        <Marquee className='overflow-hidden	' autoFill>
          FRONT END DEVELOPMENT & CREATIVE DEVELOPMENT & DESIGN & DATA SCIENCE <span className='mx-2'> &</span>
        </Marquee>
      </div>
      <div id='me' className=' min-h-dvh  bg-gray-950	text-gray-100'>
        <div className='box'>
          <div className=' mb-8 flex flex-col font-mono leading-none'>
            <span>[02]</span> <span className='ml-[-8px] text-[30vw] lg:text-[11vw]'>ME</span>{' '}
          </div>
          <div className=' flex flex-col justify-between gap-32 lg:flex-row xl:gap-64 '>
            <div className='basis-1/3'>
              <span className='font-normal'>
                <Trans i18nKey={t('bio')} />
              </span>
            </div>
            <div className='flex basis-2/3 justify-between gap-8'>
              <Toolbox />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
