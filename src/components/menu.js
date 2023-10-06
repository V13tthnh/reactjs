import { NavLink } from 'react-router-dom';

function Menu() {
    return(<div className='menu'>
        <div className='row'>
            <div className="col-md-12">
                <NavLink to="/" className="col-md-3">TRANG CHỦ</NavLink> | <a href="" className="col-md-3">VỀ CHÚNG TÔI</a> | 
                <NavLink to="/productList" className="col-md-3">SẢN PHẨM</NavLink> | <a href="" className="col-md-3">TIN TỨC</a> | 
                <a href="" className="col-md-3">LIÊN HỆ</a>
            </div>
        </div>
    </div>);
    
}

export default Menu;
//link, NavLink(css className)