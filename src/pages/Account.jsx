import React from 'react'
import styled from 'styled-components'
import Savedshows from '../components/Savedshows'

const Account = () => {
  return (
    <>
    <CONT style={{backgroundImage:`url('https://img.helpnetsecurity.com/wp-content/uploads/2020/03/23143409/netflix-collection.jpg')`,
    backgroundSize:"cover",
    backgroundPosition:'center center',}}>
      <Tit/>
      <HH>My Shows</HH>

    </CONT>
    <Savedshows/>
    </>
  )
}

export default Account
const CONT = styled.div`
  height:330px;
`;
const Tit = styled.div`
  background-color:black;
  height:330px;
  opacity:0.6;
`;
const HH = styled.h1`
  color:white;
  transform:translate(20px,-160px);
  font-weight:bold;
  font-size:1.9rem;
  line-height:1.7rem;
`;