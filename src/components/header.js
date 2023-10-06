import { NavLink } from 'react-router-dom';
import Menu from './menu';
import TimKiem from './search-bar';
function Header() {
    return (
        <div class="header">
            <div class="wrapper">
                <div class="inner">
                    <div class="grid">
                        <div class="grid-item">
                            <div class="hdt-shortnews">
                                <div class="slide-left">
                                    <marquee behavior="scroll" direction="left">
                                        🥚🥚🥚🥚🥚🚀
                                    </marquee>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-content col-md-12'>
                            <div className='d-flex justify-content-around row'>
                                <div className='logo col-md-3 '>
                                    <NavLink to="/"><img width="160px" height="70px" src="/images/376288175_270605335837441_9202681177914328727_n.jpg" alt="" /></NavLink>
                                </div>
                                <div className='search-bar col-md-6'>
                                    <TimKiem />
                                </div>
                                <div className='login col-md-2'>
                                    <NavLink to="/register">Đăng ký</NavLink>/<span><NavLink to="/login">Đăng nhập</NavLink>/<NavLink to="/customer/account">Tài khoản</NavLink></span>
                                </div>
                                <div className='cart col'>
                                    <NavLink to="/cart" className="nav-link" href=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                                        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" /></svg>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='row'>
                                <Menu/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;