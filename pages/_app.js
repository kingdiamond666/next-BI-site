import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Script from 'next/script'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import * as gtag from '../lib/gtag'
import * as fbq from '../lib/fbpixel'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    fbq.pageview()
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      fbq.pageview()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
  <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${fbq.FB_PIXEL_ID});
    `,
  }}/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
