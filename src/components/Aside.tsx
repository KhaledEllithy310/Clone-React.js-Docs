import { NavLink } from 'react-router-dom'

export default function Aside () {
  return (
    <aside className='aside-learn'>
      <nav className='flex flex-col justify-end  my-5'>
        <NavLink
          className={' capitalize p-3 rounded-3xl font-semibold text-lg'}
          to={''}
          end
        >
          Quick Start
        </NavLink>
        <NavLink
          className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
          to={'thinking-in-react'}
        >
          Thinking in React
        </NavLink>
        <NavLink
          className={'capitalize p-3 rounded-3xl font-semibold text-lg'}
          to={'installation'}
        >
          Installation
        </NavLink>
      </nav>
    </aside>
  )
}
