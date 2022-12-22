import { MetaHTMLAttributes, ReactNode } from 'react'
import Head from 'next/head'

type MetaTypeProps = {
  desc?: MetaHTMLAttributes<HTMLMetaElement>['content']
  image?: MetaHTMLAttributes<HTMLMetaElement>['content']
  title?: HTMLTitleElement['title']
  url?: MetaHTMLAttributes<HTMLMetaElement>['content']
  name?: MetaHTMLAttributes<HTMLMetaElement>['content']
}

interface LayoutProps extends MetaTypeProps {
  children: ReactNode
}

const meta = Object.freeze({
  desc: '차장',
  image: '',
  name: '차장',
  title: '차장',
  url: '',
} as const)

const Layout = ({ children, desc, image, title, url, name }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : meta.title}</title>
        <meta name="description" content={desc ? desc : meta.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url ? url : meta.url} />
        <meta property="og:site_name" content={name ? name : meta.name} />
        <meta property="og:image" content={image ? image : meta.image} />
        <meta property="og:title" content={title ? title : meta.title} />
        <meta property="og:description" content={desc ? desc : meta.desc} />
        <meta name="twitter:card" content={image} />
        <meta name="twitter:site" content={name ? name : meta.name} />
        <meta name="twitter:title" content={title ? title : meta.title} />
        <meta name="twitter:description" content={desc ? desc : meta.desc} />
        <meta property="twitter:image" content={image ? image : meta.image} />
        <meta property="product:brand" content={name ? name : meta.name} />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
