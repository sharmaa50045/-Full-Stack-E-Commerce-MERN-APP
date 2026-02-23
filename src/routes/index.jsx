import { createBrowserRouter } from "react-router-dom"
import App from '../App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />
      }
    ]
  }
])

export default router