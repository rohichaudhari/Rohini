// import logo from './logo.svg';
import './App.css';
// import Contact from './Component/Contact/Contact';
import Homes from './Component/Home/Homes';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact/Contact';
// import Pages from './Component/Pages/Pages';
import EEror from '../src/Component/Pages/EEror'
import Shop from './Component/Shop/Shop';
import Pages from './Component/Pages/Pages';
import Signin from './Component/Pages/Signin';
import Blog from './Component/Blog/Blog';
import Wishlist from './Component/Shop/Wishlist';
import Woodenhome from './Component/Shop/Homechild/Woodenhome';
import Fashionhome from './Component/Shop/Homechild/Fashionhome';
import Productdetails from './Component/Home/Productdetails';

import Shopchild1 from './Component/Shop/Shopchild/Shopchild1'
import Card from './Component/Shop/Card';
// import Datamap from './Component/Home/Datamap';
import {Provider} from "react-redux"
import store from './Store/Store';
import ProductCard from './Component/Product/ProductCard';


function App() {
  return (
  
    <div className="App px-6">
      {/* <Homes/>
      <Contact/> */}
      {/* <Pages/> */}
      {/* <Datamap/> */}
      <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homes/>}/>
      <Route path='/woodenhome' element={<Woodenhome/>}/>
      {/* <Route path='/horsecard' element={<Horsecard/>}/> */}
      <Route path='/fashionhome' element={<Fashionhome/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/shop2' element={<Shopchild1/>}/>
      <Route path='/page' element={<Pages/>}/>
      <Route path='/blog' element={<Blog/>}/>
      {/* Child component */}
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/data/:id' element={<Productdetails/>}/>
      <Route path='*' element={<EEror/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
   </div> 
  );
}

export default App;
