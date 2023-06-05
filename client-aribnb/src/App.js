import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up/Sign-up';

function App() {
  return (
<>
<Routes>
  <Route path='/auth'>
    <Route path='sign-up' element={<SignUp/>}/>
  </Route>
</Routes>
</>
  );
}

export default App;
