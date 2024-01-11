
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Popular from './Components/Popular/Popular'
import Recommended from './Components/Recommended/Recommended'
import Footer from './Components/Footer/Footer'

export default function Home() {
  return (
   <div className='max-w-screen-xl m-auto'>
   <Navbar></Navbar>
   <Banner></Banner>
   <Popular></Popular>
   <Recommended></Recommended>
   <Footer></Footer>
   </div>
  )
}
