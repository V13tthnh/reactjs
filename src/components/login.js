import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    <div className="form-group">
                        <strong>Đăng nhập</strong>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    <div className="form-group">
                        <strong>Tên đăng nhập</strong>
                        <input type="text" placeholder="Nhập tên đăng nhập" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <strong>Mật khẩu</strong>
                        <input type="password" placeholder="Nhập mật khẩu" className="form-control"/>
                    </div>    
                </div>
            </div>
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-9">
                            <NavLink to="/register">Chưa có tài khoản?</NavLink>
                        </div>
                        <div className="col-md-3">
                            <NavLink to="forget-password">Quên mật khẩu</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center row">
                <button className="btn btn-primary mt-3 ">Đăng nhập</button>
            </div>
               
            </div>
        </>
    );
}
export default Login;