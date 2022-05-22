import './App.css';
import NavBar from './Component/NavBar/Navbar';
import Body from './Component/Body/Body';
import {useSelector,useDispatch} from "react-redux";
function App() {
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart);
  console.log(cart);
  return (
    <div className="App">
      <NavBar/>
      <Body/>
    </div>
  );
}

export default App;
