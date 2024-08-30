
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
   const{type,id}= useParams()
    const [movieDetails,setMovieDetails]=useState("")
    const getMovieDetails =async()=>{

        const{data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=2d04be88e1f060b1b75fdd7998e7dd4b`)
        console.log(data);
        setMovieDetails(data)
    }

    useEffect(()=>{
        getMovieDetails()
    },[])
  return (
    <>
  
<div className="grid grid-cols-3 gap-4 m-5 h-screen ">
  <div className="col-span-1 bg-white  overflow-hidden">
  <Helmet>
                
                <title>Details</title>
                
            </Helmet>
    <img 
      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
      className='w-full hover:scale-125 transition-transform duration-500 cursor-pointer' 
      alt={movieDetails.title} 
      
    />
    
  </div>
  
  <div className="col-span-2 bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
    <h1 className="text-3xl font-bold mb-4">{movieDetails.name}</h1>
    
    <p className="text-lg mb-4">{movieDetails.overview}</p>

    <div className="mb-4">
      <span className="font-semibold">Rating:</span> {movieDetails.vote_average} / 10
    </div>

    <div className="mb-4">
      <span className="font-semibold">Genres:</span> 
      {movieDetails?.genres?.map(genre =>genre.name ).join(', ')}
    </div>

    <div className="mb-4">
      <span className="font-semibold">Release Date:</span> {movieDetails.release_date}
      <span className="font-semibold"></span> {movieDetails.first_air_date}
    </div>

    {movieDetails.homepage && (
      <div className="mb-4">
        <span className="font-semibold">Homepage:</span> 
        <a 
          href={movieDetails.homepage} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {movieDetails.homepage}
        </a>
      </div>
    )}
  </div>
</div>

    </>
  )
}

export default MovieDetails
