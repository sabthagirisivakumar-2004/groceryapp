import React from 'react'
import Home from './components/home';
import { Routes,Route } from 'react-router-dom';
import Searchmain from './components/search/searchmain';
import Touch from './components/touch/touch';
import Cart from './components/cart/cartmain';
import History from './components/history/history';
import Profile from './components/profile/profile';
import Signin from './components/signin';
import Signup from './components/signup';
const App = () => {
  return (
    <>
   <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/searchmain' element={<Searchmain/>}/>
   <Route path='/touch' element={<Touch/>}/>
   <Route path='/cartmain' element={<Cart/>}/>
   <Route path='/history' element={<History/>}/>
   <Route path='/profile' element={<Profile/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App;