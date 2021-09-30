import React from 'react'
import NavBar from './NavBar'
import RowPost from './RowPost'
import Banner from './Banner'
import requests from './requests'
import './HomeScreen.css'
function HomeScreen() {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <RowPost title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} isLargePoster/>
            <RowPost title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <RowPost title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <RowPost title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <RowPost title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <RowPost title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <RowPost title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <RowPost title="Doccumentaries" fetchUrl={requests.fetchDocumentaries}/>
            
        </div>
        
    )
}

export default HomeScreen
