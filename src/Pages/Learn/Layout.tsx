import Aside from '../../components/Aside'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div className='grid grid-cols-4'>
      <Aside />
      <section className='col-span-3 px-3'>
        <Navbar />
        <Outlet />
      </section>
    </div>
  )
}
