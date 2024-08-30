import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chanta } from '../../context/Context';
import { Link } from 'react-router-dom';
import  {Helmet } from 'react-helmet';
const Movies = () => {


  const [Movie,setmovies]=useState([])
  const [input,setinput]=useState("");
  
  const getDataInput=(e)=>{
    console.log('hello')
    setinput(e.target.value)
  }
  let show=input? "search":"discover"
  const getMovies =async()=>{
      let {data}=await axios.get(`https://api.themoviedb.org/3/${show}/movie?api_key=2d04be88e1f060b1b75fdd7998e7dd4b`,{
        params:{
          query:input
        }
      })
      setmovies(data.results)
      console.log(data.results)
  }
  // const getMovies = async () => {
  //   try {
  //     const endpoint = show === 'search' ? 'search/movie' : 'discover/movie';
  //     let { data } = await axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
  //       params: {
  //         api_key: '2d04be88e1f060b1b75fdd7998e7dd4b',
  //         query: input
  //       }
  //     });
  
  //     setmovies(data.results);
  //     console.log(data.results);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };
  
  useEffect(()=>{
    getMovies()
  },[input])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
  <>
   {Movie? <div className=' w-full'>
   <Slider {...settings} className='flex flex-col mb-4 mt-2 gap-4 h-56 px-4 rounded-md '>
        
        {Movie.map((x)=>
        <img src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} className='w-5 rounded-lg  p-3 cursor-pointer ' alt={x.title} />)}

       
       
     </Slider>
     
     <Helmet>
                
                <title>Movies</title>
                
            </Helmet>
     <div className='grid grid-cols-3 gap-4 p-4 '> 
     <div className='w-full text-center my-auto'>
       <h1 className='p-4 text-6xl  text-yellow-800'>Movies</h1>
      
       <input type="text" className='bg-gray-300 text-black placeholder:italic placeholder:text-slate-900  p-2 border-0 outline-none rounded-xl text-center ' onChange={getDataInput} placeholder='search'/>

     </div>
     
    
     {Movie.filter((x)=>{ return `https://image.tmdb.org/t/p/w500${x.poster_path}`!==null}).map((x,idx)=>{ return <div key={idx} className='text-center text-black grid-flow-col gap-4'> 
     
       <div className='bg-gray-100 p-4 rounded-lg shadow-md '>
           <div className='text-black text-center text-xl font-bold mb-2'>
           <Rating unratedColor="amber" ratedColor="amber" />
             <div className='overflow-hidden'>
        

               <Link to={`/movieDetails/movie/${x.id}`}>
               <img src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} className='w-full hover:scale-125 transition-transform duration-500 cursor-pointer' alt={x.title} />
               
               </Link>
               
               </div>
           
             
              <h1 className='text-black'>{x.title}</h1>

           </div> 
          </div>
       </div>
   })}
       
   </div>
   </div>:<Spinner className='flex items-center h-12 w-12 text-white bg-black'/>}
  
  
  
   </>
 
  )
}

export default Movies
