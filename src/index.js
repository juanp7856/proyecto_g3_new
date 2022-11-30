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
        <Route path='proyecto_g3_new/' element={ <Home /> } />
        <Route path='proyecto_g3_new/register' element={<Register />} />
        <Route path='proyecto_g3_new/login' element={<Login />} />
        <Route path='proyecto_g3_new/profileInfo' element={<ProfileInfo />} />
        <Route path='proyecto_g3_new/prebuiltselect' element={<PrebuildSelect />} />
        <Route path='proyecto_g3_new/prebuilt/:id' element={<Prebuilt />} />
        <Route path='proyecto_g3_new/custombuild' element={<Custombuild />} />
        <Route path='proyecto_g3_new/cart' element={<Cart />} />
        <Route path='proyecto_g3_new/checkout' element={<Checkout />} />
        <Route path='proyecto_g3_new/orderHistory' element={<OrderHistory />} />
        <Route path='proyecto_g3_new/ticket' element={<Ticket />} />
        <Route path='proyecto_g3_new/ratingusers' element={<Ratingusers />} />
        <Route path='proyecto_g3_new/ratinginfluencers' element={<Ratinginfluencers />} />
        <Route path='proyecto_g3_new/rankingperipherals' element={<Rankingperipherals />} />
        <Route path='proyecto_g3_new/rankingpcs' element={<Rankingpcs />} />
        <Route path='proyecto_g3_new/passwordreset' element={<HistoriaExtraFP />} />
        <Route path='proyecto_g3_new/prod/:id' element={<ProductoDet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();