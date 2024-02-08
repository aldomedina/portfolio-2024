const title = 'ALDO - DESIGN & DEVELOPMENT'
const url = 'aldomedina.design'
const description = 'Portfolio. Front-end focused on creative development and UX UI design. Creative Developer.'
const author = 'Aldo Medina'
const keywords = 'Front End,Developer,Full Stack,Data Scientist,UX UI Designer'

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/icons/share.png'} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <link rel='icon' type='image/png' href='/icons/favicon-196x196.png' sizes='196x196' />
      <link rel='icon' type='image/png' href='/icons/favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/png' href='/icons/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/icons/favicon-16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='/icons/favicon-128.png' sizes='128x128' />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='apple-touch-startup-image' href='/startup.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/icons/apple-touch-icon.png' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      {/* <meta name='twitter:card' content='summary' /> */}
      {/* <meta name='twitter:site' content={twitter} /> */}
    </>
  )
}
