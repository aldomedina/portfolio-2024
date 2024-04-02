import Head from 'next/head'
import { PropsWithChildren } from 'react'

const meta = {
  title: 'ALDO - DESIGN & DEVELOPMENT',
  url: 'https://aldomedina.design',
  description: 'Portfolio. Front-end focused on creative development and UX UI design. Creative Developer.',
  author: 'Aldo Medina',
  keywords: 'Front End,Developer,Full Stack,Data Scientist,UX UI Designer',
  image: '/icons/share.png',
}

const CommonHead = ({ children }: PropsWithChildren) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta name='keywords' content={meta.keywords} />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={meta.url} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:image:alt' content='aldo portfolio' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='article:author' content='https://www.linkedin.com/in/aldo-medina-z/' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={meta.url} />
      <meta name='twitter:creator' content={meta.author} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />

      <link rel='icon' type='image/png' href='/icons/favicon-196x196.png' sizes='196x196' />
      <link rel='icon' type='image/png' href='/icons/favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/png' href='/icons/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/icons/favicon-16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='/icons/favicon-128.png' sizes='128x128' />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      {children}
    </Head>
  )
}

export default CommonHead
