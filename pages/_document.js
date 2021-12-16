import Document, { Html, Head, Main, NextScript } from 'next/document'
import LinkedIn from '../comps/Analytics/LinkedIn'
import { FB_PIXEL_ID } from '../lib/fbpixel'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });

          `,
            }}
          />
          <noscript> <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          /></noscript>

        </Head>
        <body>
          <Main />
          <NextScript />
          <LinkedIn />
        </body>
      </Html>
    )
  }
}