import React,{useEffect,useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase';
import { doc,onSnapshot, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai'
const Savedshows = () => {
    const [movies,setMovies] = useState([]);
    const {user} = UserAuth();
    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])
    const movieRef = doc(db,'users',`${user?.email}`)
    const deleteShow = async (passedID)=>{
        try{
            const result = movies.filter((item)=> item.id!==passedID)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
    <Title>My Shows</Title>
    <>
    <Cont>
        <Rows>
            {movies.map((item,id)=>(
            <Card>
                <img style={{
                    width:"100%",
                    height:'auto',
                    display:'block'
                }} src={`https://image.tmdb.org/t/p/original/${item?.img}`} alt={item.title}/>
                <Name >
                    <p style={{
                        marginTop:'20%',
                        textAlign:'center'
                    }}>{item?.title}</p>
                    <Icon onClick={()=> deleteShow(item.id)}><AiOutlineClose/></Icon>
                </Name>
            </Card>
                
            ))}
            </Rows>
            </Cont>
            </>
    </div>
  )
}

export default Savedshows
const Title = styled.div`
    color:white;
    padding:12px;
    font-size:1.5rem;
    line-height:1.75rem;
    font-weight:bold;
`;
const Card = styled.div`
    width:250px;
    height:70px;
    padding:8px;
    border-radius:2px;
    cursor:pointer;
    display:inline-block;
    position:relative;
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
const Name = styled.div`
    position:absolute;
    top:0;
    width:95%;
    height:132px;
    margin-top:0.5rem;
    opacity:0;
    &:hover{
        background-color:black;
        opacity:0.8;
        color:white;
        font-weight:800;
    }

`;

const Icon = styled.div`
    margin-top:-65px;
    margin-left:212px;
`;