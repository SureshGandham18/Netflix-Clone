import React, { useEffect, useState } from 'react'
import requests from '../Request';
import axios from 'axios';
import styled from 'styled-components';
const Mian = () => {
    const [movies,setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(()=>{
        axios.get(requests.fetchTrending).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    const truncate = (str,num) => {
        if(str?.length>num){
            return str.slice(0,num)+'...';
        }else{
            return str;
        }
    }
  return (
    
    <Cont
    style={{
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize:"cover",
        backgroundPosition:'center center',

    }}>
        
        <Banner>
            <Title>{movie?.name || movie?.title || movie?.original_name}</Title>
            <Btn>
                <Btn1>Play</Btn1>
                <Btn2>Watch Later</Btn2>
            </Btn>
            <Release>Released: {movie?.release_date}</Release>
            <Over>{truncate(movie?.overview,150)}</Over>
            {/* <Over>{movie?.overview}</Over> */}
        </Banner>
        <Nav/>
        {/* <Nav1/> */}
    </Cont>
  )
}

export default Mian
const Cont = styled.div`
height:500px;
color:white;
object-fit: contain;
@media (max-width: 768px) {
    height:350px;
  }
`;
const Banner = styled.div`
margin-left: 30px;
padding-top: 140px;
height:190px ;
@media (max-width: 550px) {
    margin-left:6px;
  }
`;
const Title = styled.div`
font-size: 2.7rem;
font-weight: 900;
padding-bottom: 0.25rem;
margin-top:3rem;
@media (max-width: 768px) {
    font-size:1.7rem;
    font-weight:600;
    // padding-bottom:0.5rem
    margin-top:-3rem;
  }
`;
const Nav = styled.div`
height: 19.5rem;
background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37,37,37,0.61),
    #111
);
@media (max-width: 768px) {
    height:10rem;
  }
`;

const Btn = styled.div``;
const Btn1 = styled.button`
cursor: pointer;
color: #000;
outline: none;
border: 1.7px solid #e6e6e6;
font-weight: 600;
border-radius: 0.2vw;
padding-left: 2.0rem;
padding-right: 2.0rem;
margin-right: 1rem;
padding-top: 0.5rem;
background-color: #e6e6e6;
padding-bottom: 0.5rem;
@media (max-width: 768px) {
    font-weight:400;
    padding-left:1.7rem;
    padding-right:1.7rem;
    padding-top:0.3rem;
    padding-bottom:0.3rem;
  }
&:hover{
    color: #fff;
    background-color: rgba(51,51,51,0.5);
    transition: 0.2s;
}
`;
const Btn2 = styled.button`
cursor: pointer;
color: #fff;
outline: none;
border: 1.7px solid #e6e6e6;
font-weight: 600;
border-radius: 0.2vw;
padding-left: 2.0rem;
padding-right: 2.0rem;
margin-right: 1rem;
padding-top: 0.5rem;
background-color: rgba(51,51,51,0.5);
padding-bottom: 0.5rem;
@media (max-width: 768px) {
    font-weight:400;
    padding-left:1.7rem;
    padding-right:1.7rem;
    padding-top:0.3rem;
    padding-bottom:0.3rem;
  }
&:hover{
    color: #000;
    background-color: #e6e6e6;
    transition: 0.2s;
}
`;
const Release = styled.div`
    color:rgb(220,220,220);
    font-size:0.875;
    line-height:1.25rem;
    margin-top:0.6rem;
    @media (max-width: 768px){
        margin-top:0.3rem;
      }
`;
const Over = styled.div`
    margin-top:0.8rem;
    width:70%;
    @media (max-width: 768px) {
        width:100%;
        margin-top:0.3rem;
      }

`;