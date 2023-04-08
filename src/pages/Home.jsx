import React from 'react'
import Mian from '../components/Mian'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Mian/>
      <Row title='Trending' fetchURL={requests.fetchTrending}/>
      {/* <Row title='Originals' fetchURL={requests.fetchNetflixOriginals}/> */}
      <Row title='TopRated' fetchURL={requests.fetchTopRated}/>
      <Row title='ActionMovies' fetchURL={requests.fetchActionMovies}/>
      <Row title='ComedyMovies' fetchURL={requests.fetchComedyMovies}/>
      <Row title='HorrorMovies' fetchURL={requests.fetchHorrorMovies}/>
      <Row title='RomanceMovies' fetchURL={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
    </>
  )
}

export default Home