// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {path: true, element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <NotFound/>},
  ]}
])

function App() {
  return <>
      <RouterProvider router={router}></RouterProvider>
      <h1>app</h1>
    </>
}

export default App
