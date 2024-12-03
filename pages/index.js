import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <div className='container-lg flex flex-col mx-auto'>
    <GoogleAnalytics gaId="G-PFNQT0LP7R" />
      <Header/>
      <main>
        <Content/>
      </main>
    <footer className='flex justify-center'>
      <Footer/>
    </footer>
    </div>
  )
}
