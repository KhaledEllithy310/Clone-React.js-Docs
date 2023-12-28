import { NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className='flex justify-end space-x-5 my-5 pr-5'>
      <NavLink
        className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
        to={'/'}
      >
        Home
      </NavLink>
      <NavLink
        className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
        to={'/about'}
      >
        about
      </NavLink>
      <NavLink
        className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
        to={'/learn'}
      >
        learn
      </NavLink>
      <NavLink
        className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
        to={'/contribute'}
      >
        contribute
      </NavLink>
      <NavLink
        className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
        to={'/login'}
      >
        login
      </NavLink>
    </nav>
  )
}
