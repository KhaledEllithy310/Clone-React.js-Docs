import { useLocation } from 'react-router-dom'

export default function Contribute () {
  const location = useLocation()

  return (
    <div className='text-center'>
      <p>Hello {location?.state?.email}</p>
      <h1>contribute</h1>
    </div>
  )
}
