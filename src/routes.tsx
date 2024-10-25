import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/not-found'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <NotFound />
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <NotFound />
  }
])