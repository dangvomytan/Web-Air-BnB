import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up/Sign-up';
import SignIn from './pages/sign-in/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reducerAllProduct } from './redux/reducer/ProductSlice';
import Rooms from './pages/rooms/Rooms';
import Pay from './components/pay/Pay';
import IsStays from './components/IsStays/IsStays';

function App() {
  const dispatch=  useDispatch();
  useEffect(()=>{
    const getAllProduct = async () =>{
      await dispatch(reducerAllProduct()).unwrap();
    }
    getAllProduct();
  },[])
  return (
<>
<Routes>
  <Route path='/' index element={<Home/>}/>
  <Route path='/rooms' element={<Rooms/>}/>
  <Route path='/auth'>
    <Route path='sign-up' element={<SignUp/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
  </Route>
  <Route path='/stays' element={<IsStays/>}>
    <Route path='pay' element={<Pay/>}/>
  </Route>
</Routes>
</>
  );
}

export default App;
