import React from 'react';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/products/productView';
import Login from './pages/login/login';

// import Product from './Product'; <Main>여기에 상품 목록 뿌려주기</Main>




function App() {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/login/login" element={<Login />}></Route>
            <Route path="/" element={<Main />}></Route>
            <Route path="/products/:productId" element={<Product />}></Route>

        </Routes>
      </BrowserRouter>

			
    </div>
  )
}

export default App;
