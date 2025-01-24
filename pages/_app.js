import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'



function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#385B94] to-[#273767]'>
    
      <Head>
        <title>Mesut Yılmaz | Yazılım & Tasarım</title>
        <meta name="description" content="Mesut Yılmaz Yazılım & Tasarım" />
        <link rel="icon" href="/fav-mesutyilmaz.ico" />

        <meta property="og:locale" content="tr_TR" />
        <meta property="og:title" content="Mesut Yılmaz Yazılım & Tasarım" />
        <meta property="og:description" content="Freelance / Remote full stack developer & designer" />
        <meta property="og:image" content="/mesutyilmaz.jpg" />
        <meta property="og:url" content="http://www.mesutyilmaz.dev" />

          <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-WRW3TD5T2E`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WRW3TD5T2E');
            `,
          }}
        />
        
      </Head>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
