import Company from "./pages/Company";
import Connect from "./pages/Connect";
import Landing from "./pages/Landing"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/company',
    element: <Company />
  },
  {
    path: '/connect',
    element: <Connect />
  }
]); 

 const App = () => {
   return (
      <main>
        <RouterProvider router={router} /> 
      </main>
   )
 }
 
 export default App