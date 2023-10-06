import './App.css';
import HomePage from './pages/HomePage';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import './bootstrap-5.2.3/js/bootstrap.min.js';
import './fontawesome-free-6.4.2-web/css/fontawesome.min.css';
import './fontawesome-free-6.4.2-web/js/fontawesome.min.js';
import {Routes, Route} from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ProductList from './pages/ProDuctListPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Register from './pages/RegisterPage';
import Account from './pages/AccountPage';


function App() {
  return(
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/productList" element={<ProductList/>}/>
    <Route path="/detail" element={<DetailPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/customer/account" element={<Account/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>)
}

export default App;
