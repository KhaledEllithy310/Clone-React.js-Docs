import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout () {
  return (
    <div>
      <Navbar />
      <section className='pl-6'>
        <Outlet />
      </section>
    </div>
  )
}
