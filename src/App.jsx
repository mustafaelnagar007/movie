import React from 'react'
import "./App.css"
import Layout from './pages/layout/Layout';
import { createBrowserRouter,  createHashRouter,  RouterProvider as Router  } from 'react-router-dom';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Tv from './pages/tv/Tv';
import Error from './pages/error/Error';
import Context from './context/Context';
import MovieDetails from './pages/MovieDetails/MovieDetails';
const App = () => {
  const router =createHashRouter([
    
    {path:"/" ,element:<Layout />,children:[
      {index:true,element:<Home />},
      {path:"/movies" ,element:<Movies />},
      {path:"/movieDetails/:type/:id" ,element:<MovieDetails />},
      {path:"/Tv" ,element:< Tv/>},
      {path:"*" ,element:< Error/>}
    ] }])
  return   <div><Router router={router}/></div> 
  
   
    
}

export default App
