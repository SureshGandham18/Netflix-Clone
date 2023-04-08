import React, { useState } from 'react'
import styled from 'styled-components'
import {FaRegHeart,FaHeart} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {arrayUnion,doc,updateDoc} from 'firebase/firestore';
const Movies = ({item}) => {
    
    const [like,setLike] = useState(false);
    const {user} = UserAuth()
    const [saved,setSaved] = useState(false);
    const movieID = doc(db,'users',`${user?.email}`)
    const saveShow = async()=>{
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows: arrayUnion({
                    id:item.id,
                    title:item.title,
                    img:item.backdrop_path,
                })
            })
        }else{
            alert('Please log in to save a movie')
        }

    }
  return (
    <div>
        <Cont>
            <Rows>
                    <Card>
                        <img style={{
                            width:"100%",
                            height:'auto',
                            display:'block'
                        }} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item.title}/>
                        <Name >
                            <p style={{
                                marginTop:'20%',
                                textAlign:'center'
                            }}>{item?.title}</p>
                            <p onClick={saveShow} >{like?<FaHeart style={{
                                position:'absolute',
                                top:'4px',
                                left:'4px'
                            }}/>:<FaRegHeart style={{
                                position:'absolute',
                                top:'4px',
                                left:'4px'
                            }}/>}</p>
                        </Name>
                    </Card>
            </Rows>
        </Cont>

    </div>
  )
}

export default Movies

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