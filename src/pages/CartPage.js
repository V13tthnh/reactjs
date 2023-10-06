import Header from '../components/header';
import Cart from '../components/cart';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { useState } from 'react';

function CartPage(){
    return(<>
        <Header/>
        <Cart/>
        <Footer/>
    </>);
}

export default CartPage;

