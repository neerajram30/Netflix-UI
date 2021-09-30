import React from 'react'
import './Banner.css'
import {useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'

function Banner() {
    const [movie,setMovie] = useState([])
    
   useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            ); 
       return request;
       }
       fetchData();
   }, []);

   console.log(movie);
    function truncate(string, n){
        return string?.length> n ? string.substring(0 ,n-1) +'...' : string;
    }


    return (
        <div className="Banner" 
        style={{
            backgroundImage :`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            
            
        
        }}
        >
            <div className="content">
                <h1 className="Title">{movie?.title || movie?.name || movie?.orginal_name}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>

                </div>
                <h1 className="description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
 