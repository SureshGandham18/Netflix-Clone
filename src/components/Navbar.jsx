import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
    const {user,logOut} = UserAuth()
    const navigate = useNavigate()
    // console.log(user)
    const handleLogout = async()=>{
        try{
            await logOut();
            navigate('/')
        }catch(error){
        console.log(error)
        }
    }
  return (
    <Container>
        <Link to='/'><Logo>NETFLIX</Logo></Link>
        {user?.email?(
            <div>
            <Link to='/account'>
            <Btn1>Account</Btn1>
            </Link>
            <Btn2 onClick={handleLogout}>LogOut</Btn2>

        </div>
        ):(
            <div>
            <Link to='/login'>
            <Btn1>Sign In</Btn1>
            </Link>
            <Link to='signup'>
            <Btn2>Sigh Up</Btn2>
            </Link>
        </div>
        )}
    </Container>
  )
}

export default Navbar
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    z-index:100;
    width:100%;
    position:absolute;
`
const Logo = styled.div`
    color:#E50914;
    font-weight:900;
    font-size:1.7rem;
    line-height:1.9rem;
    cursor:pointer;
`
const Btn1 = styled.button`
    color:white;
    padding-right:9px;
`
const Btn2 = styled.button`
    color:white;
    background-color:red;
    font-weigth:600;
    padding:2px 8px;
    border-radius:3px;
    cursor:pointer;

`