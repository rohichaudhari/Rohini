import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Create from './Component/Create';
import Edit from './Component/Edit';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
  
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;




