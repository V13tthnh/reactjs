import SanPham from "../product/product";



function LoaiSanPham(props) {
  const listDsSP = props.data.ds_san_pham.map((item) => {
    return (<SanPham card={item} />);
  });

  return (
    <>
      <div className="container">
        <div className="product-type">
          <p>{props.data.ten}</p>
          <a href="/productList">Xem tất cả</a>
        </div>
        <div className="row">
          <div className="col-md-12">
              {listDsSP}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoaiSanPham;