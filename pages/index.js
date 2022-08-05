import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='container-lg flex flex-col mx-auto'>

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
