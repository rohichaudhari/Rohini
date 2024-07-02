// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes,route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Edit from './Component/Edit/Edit';
import Create from './Component/Create/Create';
import Navvbar from './Component/Navvbar/Navvbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navvbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/navvbar' element={<Navvbar/>}/>
        <Route path='/signin' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
