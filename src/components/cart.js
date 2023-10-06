import { NavLink } from "react-router-dom";

function Cart() {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start row">
                    <div className="col-md-12">
                        <div className="d-flex align-item center">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-around">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th><img src="/images/dacnhantam.jpg" width={130}/></th>
                                                <th>Đắc nhân tâm</th>
                                                <th><input type="number" min="1"/></th>
                                                <th>1000000</th>
                                                <th>Xóa</th>
                                            </tr>
                                        </tbody>
                                        <div className="d-flex justify-content-start">
                                            <NavLink to="/" className="col">Về trang chủ</NavLink>
                                        </div>
                                    </table>
                                    
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <strong>Người nhận</strong>
                                            <input type="text" className="form-control" placeholder="Nhập tên người nhận"/>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <strong>Hình thức thanh toán</strong>
                                            <select className="custom-select">
                                                <option selected>Thanh toán khi nhận hàng</option>
                                                <option value="">Thanh toán qua MOMO</option>
                                                <option value="">Thanh toán bằng thẻ nhân hàng</option>
                                                <option value="">Thanh toán COD</option>
                                                <option value="">Thanh toán VNPay</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex">
                                                <strong className="p-2">Tổng tiền:</strong>
                                                <strong className="ml-auto p-2">100.000 vnd</strong>
                                            </div>  
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-center">
                                               <button className="btn btn-danger">Thanh toán</button>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;