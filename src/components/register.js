function Register() {
    return (
        <><div className="container">
        <div className="d-flex justify-content-center row">
            <div className="col-md-6">
                <div className="form-group">
                <strong>Đăng ký</strong>
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
                    <strong>Email</strong>
                    <input type="Email" placeholder="Nhập Email" className="form-control"/>
                </div>
                <div className="form-group">
                    <strong>Mật khẩu</strong>
                    <input type="password" placeholder="Nhập mật khẩu" className="form-control"/>
                </div>    
            </div>
        </div>
            <div className="d-flex justify-content-center row">
                <button className="btn btn-primary">Đăng ký</button>
            </div>
        </div></>
    );
}
export default Register;