import axios from './axios'
import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function RowPost({title,fetchUrl,isLargePoster=false }) {
    
    const [movies,setMovies]= useState([])
    const [trailerUrl,setTrailerUrl] = useState("");

    const imgurl="https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        return request;
    }
    fetchData();
    }, [fetchUrl])
    const opts={
        height : "390",
        width : "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick= (movie)=>{
     if(trailerUrl){
             setTrailerUrl("");
         }else{
             movieTrailer(movie?.name || "")
             .then((url)=>{
                 console.log(url)
                 const urlParams = new URLSearchParams(new URL(url).search)
                 setTrailerUrl (urlParams.get("v"));

             }).catch((error)=>{
                 console.log(error); 
             })
         }
     }
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="posters">
                {movies.map((movie)=>

                    ((isLargePoster && movie.poster_path) || (!isLargePoster && movie.backdrop_path)) &&(

                    (    <img 
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`poster ${isLargePoster && "poster_large"}`} 
                    src={`${imgurl}${isLargePoster? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                )
                ))}
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}        
        </div>
    );
}

export default RowPost
