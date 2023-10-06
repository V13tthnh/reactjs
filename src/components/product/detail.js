function Detail() {
  return (
    <div className="container">
      <h6>TÊN SẢN PHẨM</h6>
      <div className="row">
        <div className="thums col-md-2">
          <div className="row">
            <div className="col-md-2">
              <img className="xzoom-gallery" width="150" src="/images/dacnhantam.jpg" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img className="xzoom-gallery" width="150" src="/images/dacnhantam.jpg" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img className="xzoom-gallery" width="150" src="/images/dacnhantam.jpg" />
            </div>
          </div>
        </div>
        <div className="zoom-contrainer col-md-6" >
          <img className="xzoom" src="/images/dacnhantam.jpg" width="450" />
        </div>
        <div className="detail-product col-md-4">
          <h5>Đắc nhân tâm</h5>
          <p>Giá: 70.000 vnđ</p>
          <p>Số lượng <span><input type="number" /></span></p>
          <button className="btn btn-danger">Chọn mua</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" >
          <strong>Thông tin chi tiết</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nesciunt
            rerum nobis amet incidunt accusamus asperiores quas at rem officiis eius,
            neque harum voluptates voluptatum magnam tempore nam? Distinctio, facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nesciunt rerum
            nobis amet incidunt accusamus asperiores quas at rem officiis eius, neque
            harum voluptates voluptatum magnam tempore nam? Distinctio, facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nesciunt rerum
            nobis amet incidunt accusamus asperiores quas at rem officiis eius, neque harum
            voluptates voluptatum magnam tempore nam? Distinctio, facilis.
          </p>
        </div>
      </div>
    </div>);
}

export default Detail;