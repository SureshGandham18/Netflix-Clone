import React, { useEffect, useState } from 'react'
import Movies from './Movies';
import styled from 'styled-components'
import axios from 'axios';

const Row = ({title,fetchURL}) => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)
  return (
    <div>
        <Title>{title}</Title>
        <Cont>
            <Rows>
                {movies.map((item,id)=>(
                    <Movies key={id} item={item}/>
                ))}
            </Rows>
        </Cont>

    </div>
  )
}

export default Row
const Title = styled.div`
    color:white;
    padding:12px;
    font-size:1.5rem;
    line-height:1.75rem;
    font-weight:bold;
`;

const Cont = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    overflow-x:scroll;
    overflow-y:hidden;
    padding:4px;
    ::-webkit-scrollbar{
        display: none;
    }
`; 
const Rows = styled.div`
    // width:160px;
    display:inline-block;
    display:flex;
    margin-bottom:4rem;

`;
