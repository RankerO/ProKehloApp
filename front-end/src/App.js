import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AllUser from './components/screens/allUser/AllUser'
import LandingPage from './components/screens/LandingPage/LandingPage'
import LoginScreen from "./components/screens/login/LoginScreen";
import RegisterScreen from "./components/screens/register/RegisterScreen";
import UpdateUserProile from "./components/user/UpdateUserProfile"
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/alluser' element={<AllUser />} />
          <Route path='/updateprofile' element={<UpdateUserProile/>} />
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
