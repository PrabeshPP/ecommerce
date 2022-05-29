import './App.css';
import NavBar from './Component/NavBar/Navbar';
import { Route, Routes ,Navigate} from 'react-router';
import HomePage from './Page/home';
import LoginPage from './Page/login';
import Cart from './Page/cart';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
