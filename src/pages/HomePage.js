import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import LoaiSanPham from '../components/product-type/product-type';
import { useEffect } from 'react';
import { useState } from 'react';

function HomePage(){
  const [dsLoaiSp, setDsLoaiSp] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:9000/get-data.php') //request len url
    .then(response =>response.json())           //lay du lieu dang Json tu response
    .then(json=>setDsLoaiSp(json));             //cap nhat trang thai dsLoaiSp tu du lieu Json
  },[])
    const ds = dsLoaiSp.map((item)=>{
        return <LoaiSanPham data={item}/>
    })
    return(<>
        <Header/>
        <Banner/>
        {ds}
        <Footer/>
    </>);
}

export default HomePage;