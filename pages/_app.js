import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import { GoogleAnalytics } from '@next/third-parties/google'



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
        
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-PFNQT0LP7R" />
    </div>
  ) 
}

export default MyApp
