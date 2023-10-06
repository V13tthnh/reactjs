import Sidebar from './account-sidebar';
export default function Account() {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-around">
                <Sidebar />
            <div className="col-md-8 border">
                <div className="d-flex justfy-content-around row">
                    <div className="col-md-12">
                        <div className="col-md-3">
                            <strong><h5>Thông tin khách hàng</h5></strong>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex">
                                <div className="p-2">Họ tên:</div>
                                <div className="p-2"><strong> Đinh Viết Thành</strong></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex">
                                <div className="p-2">Email:</div>
                                <div className="p-2"><strong> vietthanh051103@gmail.com</strong></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex">
                                <div className="p-2">SĐT:</div>
                                <div className="p-2"><strong> 0123456789</strong></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex">
                                <div className="p-2">Địa chỉ:</div>
                                <div className="p-2"><strong> TP.HCM</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}