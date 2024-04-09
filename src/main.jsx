import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Ebooks from './pages/Ebooks';
import Journals from './pages/Journals';
import Report from './pages/Report';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/sign_in' element={<SignIn/>} />
      <Route path='/' element={<Home />} />
      <Route path='ebooks' element={<Ebooks/>} />
      <Route path='report' element={<Report/>} />
      <Route path='journals' element={<Journals/>} />
      

    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
