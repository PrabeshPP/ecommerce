import './App.css';
import NavBar from './Component/NavBar/Navbar';
import { Route, Routes ,Navigate} from 'react-router';
import HomePage from './Page/home';
import LoginPage from './Page/login';
import Cart from './Page/cart';
import DetailPage from './Page/detail_page';
import { fetchData } from './Store/item-action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchData());
  },[dispatch])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/:productId/*" element={<DetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
