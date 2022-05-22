import './App.css';
import NavBar from './Component/NavBar/Navbar';
import Body from './Component/Body/Body';
import { Route, Routes ,Navigate} from 'react-router';
import Cart from './Component/Cart/Cart';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Body/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
