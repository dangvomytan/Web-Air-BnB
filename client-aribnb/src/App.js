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
import Admin from './pages/admin/Admin'
import { getDataUser } from './redux/reducer/UserSlice';
import Admin_User from './pages/admin/user/Admin_User';
import Admin_listUser from './components/admin/manageUser/listUser/Admin_listUser';
import Admin_Room from './pages/admin/rooms/Admin_Room';
import { reducerAllReserve } from './redux/reducer/ReserveSlice';
import Admin_Reserve from './pages/admin/reserve/Admin_Reserve';
import ConfirmPay from './pages/confirm-pay/Confirm-pay';
import Trips from './pages/trips/Trips';


function App() {
  const dispatch=  useDispatch();
  
  useEffect(() => {
    const listUser = async () => {
      await dispatch(getDataUser()).unwrap();
    }
    listUser();
  }, [])

  useEffect(()=>{
    const getAllProduct = async () =>{
      await dispatch(reducerAllProduct()).unwrap();
    }
    getAllProduct();
  },[])

  useEffect(()=>{
    const getAllReserve = async () =>{
      await dispatch(reducerAllReserve()).unwrap();
    }
    getAllReserve();
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
    <Route path='comfirm-pay' element={<ConfirmPay/>}/>
    <Route path='pay' element={<Pay/>}/>
    <Route path='trips' element={<Trips/>}/>
  </Route>
  <Route path='/Admin' element={<Admin/>}>
    <Route path='manage-user' element={<Admin_User/>}/>
    <Route path='list-user' element={<Admin_listUser/>}/>
    <Route path='manage-rooms' element={<Admin_Room/>}/>
    <Route path='manage-reserve'  element={<Admin_Reserve/>} />
  </Route>
</Routes>
</>
  );
}

export default App;
