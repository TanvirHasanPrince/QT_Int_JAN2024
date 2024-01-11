import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

export default function Home() {
  return (
   <div className='max-w-screen-xl m-auto'>
   <Navbar></Navbar>
   <Banner></Banner>
   </div>
  )
}
