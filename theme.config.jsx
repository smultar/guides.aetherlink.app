import React from 'react';
import Brand from './components/modules/brand.jsx';
import Header from './components/header.jsx';

import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config = {
  logo: <Brand/>,
  primaryHue: 200,

  project: {
    link: 'https://github.com/smultar/guides.aetherlink.app',
  },

  chat: {
    link: 'https://discord.gg/b2hTYkyVR5',
  },

  docsRepositoryBase: 'https://github.com/smultar/guides.aetherlink.app',

  sidebar: {
    defaultMenuCollapseLevel: 0
  },

  head: () => {

    let image = 'https://guides.aetherlink.app/images/og.png';
    let icon = '/svgs/logo.svg';

    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        {/* Meta - Tab */}
        <meta charSet='utf-8' />
        <title>{frontMatter.title || 'Aether Guides'}</title>
        <meta name='application-name' content='Aether Guides'/>
        <link rel='icon' href={icon}/>

        {/* Meta - Pure HTML */}
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'/>
        <meta name='url' content={`https://guildes.aetherlink.app${asPath}`}/>
        <meta name='theme-color' content={'#fffff'}/>
        <meta name='title' content={frontMatter.title || 'Aether Guides'}/>
        <meta name='description' content={'Aether Guides is a documentation website, where you can discover up-to-date guides and resources for Final Fantasy XIV'} />

        {/* Meta - Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://guildes.aetherlink.app${asPath}`} />
        <meta property='og:title' content={frontMatter.title || 'Aether Guides'} />
        <meta property='og:description' content={'Aether Guides is a documentation website, where you can discover up-to-date guides and resources for Final Fantasy XIV' } />
        <meta property='og:image' content={image}/>

        {/* Meta - Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={`https://guildes.aetherlink.app${asPath}`} />
        <meta property='twitter:title' content={frontMatter.title || 'Aether Guides'} />
        <meta property='twitter:description' content={'Aether Guides is a documentation website, where you can discover up-to-date guides and resources for Final Fantasy XIV'} />
        <meta property='twitter:image' content={image}/>
      </>
    )

  },

  footer: {
    text: <Brand/>
  },
}

export default config
