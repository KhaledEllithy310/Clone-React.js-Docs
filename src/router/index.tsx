import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import RootLayout from '../Pages/Layout'
import QuickStart from '../Pages/Learn'
import Layout from '../Pages/Learn/Layout'
import Installation from '../Pages/Learn/Installation'
import ThinkingInReact from '../Pages/Learn/ThinkingInReact'
import Contribute from '../Pages/Contribute'
import Login from '../Pages/Login'
import ProtectedRouter from '../components/Auth/ProtectedRouter'
import ErrorHandler from '../components/Errors/ErrorHandler'
import { useState } from 'react'
import PageNotFound from '../Pages/NotFoundPage'
export interface IUser {
  email: string
  password: string
}

const Router = () => {
  const [isLogged, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<IUser>({ email: '', password: '' })

  // create router with all routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* root layout */}
        <Route
          path='/'
          element={<RootLayout />}
          errorElement={<ErrorHandler />}
        >
          <Route index element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route
            path='contribute'
            errorElement={<ErrorHandler />}
            element={
              <ProtectedRouter isLogged={isLogged} pathName='/login'>
                <Contribute />
              </ProtectedRouter>
            }
          />
          <Route
            path='login'
            element={
              <ProtectedRouter
                isLogged={!isLogged}
                pathName='/contribute'
                data={userData}
              >
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setUserData={setUserData}
                  userData={userData}
                />
              </ProtectedRouter>
            }
          />
        </Route>

        {/* learn layout */}
        <Route
          path='/learn'
          element={<Layout />}
          errorElement={<ErrorHandler />}
        >
          <Route index element={<QuickStart />} />
          <Route path='thinking-in-react' element={<ThinkingInReact />} />
          <Route path='installation' element={<Installation />} />
        </Route>

        {/* 404 */}
        <Route path='*' element={<PageNotFound />} />
      </>
    )
  )

  return router
}

export default Router
