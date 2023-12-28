import { ChangeEvent, FormEvent } from 'react'
import Input from '../components/Ui/Input'
import Button from '../components/Ui/Button'
import { IUser } from '../router'

interface IProps {
  setIsLoggedIn: (value: boolean) => void
  setUserData: (user: IUser) => void
  userData: IUser
}
export default function Login ({
  setIsLoggedIn,
  setUserData,
  userData
}: IProps) {

  //============= HANDLERS ==============//

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setUserData((prevUser: IUser) => ({
    //   ...prevUser,
    //   [name]: value
    // }))
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)
    if (userData.password && userData.email) setIsLoggedIn(true)
  }
  
  return (
    <div className='grid place-items-center space-y-6'>
      <h1>Login</h1>
      <form className='space-y-6' onSubmit={onSubmitHandler}>
        <Input
          id='email'
          name='email'
          value={userData.email}
          onChange={onChangeHandler}
          placeholder='Enter your email'
        />

        <Input
          id='password'
          name='password'
          value={userData.password}
          onChange={onChangeHandler}
          placeholder='Enter your Password'
        />
        <Button type='submit'>Login</Button>
      </form>
    </div>
  )
}
