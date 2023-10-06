import Header from '../components/header';
import Account from '../components/customer/account';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { useState } from 'react';

function AccountPage(){
    return(<>
        <Header/>
        <Account/>
        <Footer/>
    </>);
}

export default AccountPage;

