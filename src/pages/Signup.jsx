import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserAuth } from '../context/AuthContext'
const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate('/')
    } catch(error){
      console.log(error)
    }
  }
  return (
    <Cont style={{backgroundImage:`url('https://img.helpnetsecurity.com/wp-content/uploads/2020/03/23143409/netflix-collection.jpg')`,
    backgroundSize:"cover",
    backgroundPosition:'center center',}}>
        <Black/>
        <Sign>
          <h1 style={{fontSize:'1.25rem',
  lineHeight:'1.75rem'}}>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)} style={{padding:'10px',margin:"12px 0px",backgroundColor:'#3b3b3b',borderRadius:"0.125rem"}}type='email' placeholder='Email' autoComplete='email'/>
            <input onChange={(e)=>setPassword(e.target.value)} style={{padding:'10px',margin:"12px 0px",backgroundColor:'#3b3b3b',borderRadius:"0.125rem"}}type='password' placeholder='Password' autoComplete='current-password'/>
            <Btn>Sign Up</Btn>
            <Check>
              <p style={{margin:'5px 0px'}}><input type='checkbox'/>Remember Me</p>
              <p>Need Help?</p>
            </Check>
            <p style={{padding:"12px 0px" }}><span style={{color:'#525252'}}>Already subscribed to Netflix?</span>{"  "} <Link to='/login'>Sign In</Link></p>
          </Form>
        </Sign>
    </Cont>
  )
}

export default Signup
const Cont = styled.div`
height:637px;
color:white;
object-fit: contain;

`;
const Black = styled.div`
  background-color:black;
  width:100%;
  height:637px;
  opacity:0.55;
  top:0;
  left:0;
  
  position:relative;
  @media (max-width: 550px) {
    opacity:1;
  }
`;
const Sign = styled.div`
  background-color:black;
  width:450px;
  height:500px;
  margin:auto;
  transform:translate(0%,-110%);
  // opacity:0.7;
  padding:40px;
  
  font-weight:bold;
`;
const Form = styled.form`
  display:flex;
  width:100%;
  flex-direction:column;
  padding:14px 0px;
`;
const Btn = styled.button`
  background-color:red;
  padding:13px;
  margin:16px 0px;
  border-radius:0.125rem;

`;
const Check = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#525252;
`;