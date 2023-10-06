import Image from './product-image';
import Name from './product-name';
import Price from './product-price';
import { NavLink } from 'react-router-dom';

function SanPham(props) {
    return (
        <NavLink to="/detail">
            <div className="card col-md-3">
                <Image image={props.card.image}/>
                <div className="card-body">
                    <Name name={props.card.name}/>
                    <Price price={props.card.price}/>
                    <NavLink to="/cart" className="btn btn-danger">Mua hàng</NavLink>
                </div>
            </div>
        </NavLink>);
}

export default SanPham;