 import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./LandingPage.css";
function LandingPage() {

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if (userInfo) {
    //         history.push("/allusers");
    //     }
    // }, [history]);
   return (
     <div className="main">
           <Container>
               <div className="intro-text">
                   <div>
                       <h1 className='title'>Welcome To ProKhelo App</h1>
                       <p className='subtitle'>One Safe place for all your health</p>
                   </div>
                   <div className='buttonContainer'>
                       <Link to='/login'>
                           <Button size="lg" className='landingbutton'>
                               Login
                           </Button>
                       </Link>
                       <Link to='/register'>
                           <Button size="lg" className='landingbutton' variant="outline-primary">
                               SignUp
                           </Button>
                       </Link>
                   </div>
               </div>
           </Container>
     </div>
   )
 }
 
 export default LandingPage
 