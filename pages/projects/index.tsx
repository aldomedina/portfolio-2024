import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans, useTranslation } from 'next-i18next'
import { featuredProjects, otherProjects } from '@/content'
import ProjectMarquee from '@/components/ProjectMarquee'
import Accordion from '@/components/Accordion'
import Pill from '@/components/Pill'

const inter = Inter({ subsets: ['latin'] })
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'projects'])),
  },
})

export default function Projects() {
  const { t } = useTranslation('projects')
  return (
    <Layout>
      <div className='flex flex-col'>
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className='txt-sm box flex h-[28rem] w-full items-end md:h-96'
        >
          <p className='max-w-52  2xl:max-w-72'>
            <Trans i18nKey={t('intro')} />
          </p>
        </div>
        <div className='flex w-full flex-col border-b border-gray-600 font-mono leading-none'>
          {featuredProjects.map((el, i) => (
            <ProjectMarquee key={el.id} {...el} direction={i % 2 === 0 ? 'right' : 'left'} />
          ))}
        </div>
        <div className='txt-sm box mx-auto flex min-h-48 items-end'>
          <p className='flex-1 sm:max-w-52 2xl:max-w-72'>
            <Trans i18nKey={t('intro-2')} />
          </p>
        </div>
        <div className='bg-gray-950'>
          <div className='box hidden justify-between font-mono text-2xl uppercase text-gray-100 md:flex md:px-8 md:py-4 lg:text-4xl 2xl:text-lg'>
            {/* <div className='w-24'>[1.{i < 5 ? '0' + (5 + i) : '' + (5 + i)}]</div> */}
            <div className='basis-1/4'>
              <Trans i18nKey={t('header-name')} />
            </div>
            <div className='basis-1/4'>
              <Trans i18nKey={t('header-working-for')} />
            </div>
            <div className='basis-1/4'>
              <Trans i18nKey={t('header-role')} />
            </div>
            <div className='w-24'>
              <Trans i18nKey={t('header-year')} />
            </div>
          </div>
        </div>
        {otherProjects.map((el, i) => (
          <Accordion
            key={el.id}
            header={
              <div key={el.id} className='cursor-pointer border-t border-gray-400 sm:hover:bg-orange-600'>
                <div className='mx-auto flex w-full flex-wrap gap-x-4 p-4 font-mono text-xl uppercase md:flex-nowrap md:justify-between  md:px-8 lg:text-4xl 2xl:w-4/5 2xl:text-lg'>
                  <div className='basis-full font-medium md:basis-1/4'>
                    <span className='text-xl font-normal md:hidden'>[{el.year}]</span> {el.name}
                  </div>

                  <div className='w-max md:basis-1/4'>
                    <span className='mt-4 font-sans text-sm font-bold normal-case opacity-30 md:hidden'>
                      <Trans i18nKey={t('mobile-working-for')} />
                      <br />
                    </span>
                    {el.workingFor}
                  </div>

                  <div className='w-max md:basis-1/4'>
                    <span className='mt-4 font-sans text-sm font-bold normal-case opacity-30 md:hidden'>
                      <Trans i18nKey={t('mobile-as')} />
                      <br />
                    </span>
                    {el.roles}
                  </div>
                  <div className='hidden w-24 md:block'>{el.year}</div>
                </div>
              </div>
            }
          >
            <div className='box relative flex flex-col gap-2 md:flex-row md:gap-8'>
              <div className='w-full border-t border-dashed border-gray-400 pt-4 md:w-64 md:border-none md:pt-0 lg:w-96 '>
                {el.body}
              </div>
              <div className='w-px self-stretch bg-gray-600' />
              <div className='flex-1 gap-4'>
                <div className='mb-4 text-sm font-semibold text-gray-600'>Tools:</div>
                <div className='flex flex-wrap gap-2'>
                  {el.tools.map((tool, i) => (
                    <Pill key={`${el.id}-${tool}-${i}`} dark>
                      {tool}{' '}
                    </Pill>
                  ))}
                </div>
              </div>
              {el.web && (
                <>
                  <div className='w-px self-stretch bg-gray-600' />
                  <div>
                    <div className='mb-2 text-sm font-semibold text-gray-600'>website:</div>
                    <a
                      href={el.web}
                      target='_blank'
                      rel='noreferrer noopener'
                      className='font-mono text-xl sm:hover:text-orange-600'
                    >
                      {el.web}
                    </a>
                  </div>
                </>
              )}
            </div>
          </Accordion>
        ))}
      </div>
    </Layout>
  )
}
