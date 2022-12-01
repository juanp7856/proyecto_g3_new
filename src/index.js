import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/register';
import PrebuildSelect from './pages/prebuiltselect';
import Prebuilt from './pages/prebuilt';
import Home from './pages/home';
import Login from './pages/login';
import ProfileInfo from './pages/profileinfo';
import Custombuild from './pages/custombuild';
import reportWebVitals from './reportWebVitals';
import Ratinginfluencers from './pages/ratinginfluencers';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import OrderHistory from './pages/orderhistory';
import Ticket from './pages/ticket';
import Ratingusers from './pages/ratingusers';
import Rankingperipherals from './pages/rankingperipherals';
import Rankingpcs from './pages/rankingpcs';
import HistoriaExtraFP from './pages/HIstoriaExtraFP';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoDet from './components/ProductoDet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profileInfo' element={<ProfileInfo />} />
        <Route path='/prebuiltselect' element={<PrebuildSelect />} />
        <Route path='/prebuilt/:id' element={<Prebuilt />} />
        <Route path='/custombuild' element={<Custombuild />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/ratingusers' element={<Ratingusers />} />
        <Route path='/ratinginfluencers' element={<Ratinginfluencers />} />
        <Route path='/rankingperipherals' element={<Rankingperipherals />} />
        <Route path='/rankingpcs' element={<Rankingpcs />} />
        <Route path='/passwordreset' element={<HistoriaExtraFP />} />
        <Route path='/prod/:id' element={<ProductoDet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();