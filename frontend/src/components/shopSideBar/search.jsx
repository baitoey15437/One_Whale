import React,{ useState, useEffect ,useRef} from "react";
import { useSelector } from "react-redux";
import { FaThLarge, FaThList, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import SideBar from "@/components/shopSideBar/filter_home";
import RelatedProduct from "@/components/product/related-product";
import ProductList from "@/components/product/list";
import ReactPaginate from "react-paginate";

function ShopRightSideBar({keyword}) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const keyword = urlParams.get('keyword');
  const defaultasset = urlParams.get('asset')
  const [selectValue, setSelectValue] = useState(defaultasset);

  const [datas, setData] = useState([]); // data จาก fetch
  const [sortBy, setSortBy] = useState('id') // รับตัว Sort
  const [newdata, setNewdata] = useState([]); // data ที่ show

  const [geography_id , setGeography] = useState('');
  const [province_id, setprovince] = useState('');
  const [zone, setZone] = useState([]);
  const [type, setType] = useState([]);
  const [option, setOption] = useState([]);
  const [price, setPrice] = useState({ min: null, max: null });
  const [area, setArea] = useState({ min: null, max: null });

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/api/asset/list");
          const data = await response.json();
          setData(data);
          setNewdata(data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);

const handleFilterChange = (selected) => {
  const geography_id = selected.geography_id;
  const province_id = selected.province_id;
  const zone = selected.zone;
  const type = selected.type;
  const option = selected.option;
  const price = selected.price;
  const area = selected.area;

  setGeography(geography_id);
  setprovince(province_id);
  setZone(zone);
  setType(type);
  setOption(option);
  setPrice(price);
  setArea(area);
  
  const filteredData = datas.filter(item => 
    (geography_id === '' || item.location.geographie_id == geography_id) 
    && (province_id === '' || item.location.province_id == province_id)
    && (zone.length === 0 || zone.includes(item.zone.zone))
    && (type.length === 0 || type.includes(item.zone.type))
    && (option.length === 0 || option.every(option_det_name => item.option.some(value => value.option_det_name === option_det_name)))
    && (price.min === null || item.asset.price >= price.min) && (price.max === null || item.asset.price <= price.max) 
    && (area.min === null || item.asset.size >= area.min) && (area.max === null || item.asset.size <= area.max) 
    && (keyword === '' || item.asset.asset_name.toLowerCase().includes(keyword.toLowerCase()))
  );
  setNewdata(filteredData);
  sortData(filteredData);
  setPageNumber1(0);
  setPageNumber2(0);
};

useEffect(() => {
  // ทำการค้นหา keyword ใหม่
  searchKeyword(keyword);
}, [keyword]);

const searchKeyword = (keyword) => {
  const searchData = datas.filter(item => 
    (geography_id === '' || item.location.geographie_id == geography_id) 
    && (province_id === '' || item.location.province_id == province_id)
    && (zone.length === 0 || zone.includes(item.zone.zone))
    && (type.length === 0 || type.includes(item.zone.type))
    && (option.length === 0 || option.every(option_det_name => item.option.some(value => value.option_det_name === option_det_name)))
    && (price.min === null || item.asset.price >= price.min) && (price.max === null || item.asset.price <= price.max) 
    && (area.min === null || item.asset.size >= area.min) && (area.max === null || item.asset.size <= area.max) 
    && (keyword === '' || item.asset.asset_name.toLowerCase().includes(keyword.toLowerCase()))
  );
  setNewdata(searchData);
  sortData(searchData);
  setPageNumber1(0);
  setPageNumber2(0);
}

const handleChangeSortBy = (e) => {
  setSortBy(e.target.value);
};

const sortData = (data) => {
  // ทำการเรียงข้อมูลตาม sortBy
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'id') {
      return a.asset.assetdet_id - b.asset.assetdet_id;
    } else if (sortBy === 'date_new') {
      return new Date(b.asset.update_date) - new Date(a.asset.update_date);
    } else if (sortBy === 'date_old') {
      return new Date(a.asset.update_date) - new Date(b.asset.update_date);
    } else if (sortBy === 'price_low') {
      return a.asset.price - b.asset.price;
    } else if (sortBy === 'price_high') {
      return b.asset.price - a.asset.price;
    } else if (sortBy === 'area_small') {
      return a.asset.size - b.asset.size;
    } else if (sortBy === 'area_big') {
      return b.asset.size - a.asset.size;
    }
    return 0;
  });
  // อัพเดทข้อมูลที่ถูกเรียงลำดับ
  setNewdata(sortedData);
  setPageNumber1(0);
  setPageNumber2(0);
};

// เรียกใช้งานฟังก์ชันเรียงลำดับเมื่อมีการเปลี่ยนแปลงใน sortBy
useEffect(() => {
  sortData(newdata);
}, [sortBy]);

  const { products } = useSelector((state) => state.product);


  const getSortParams = (sortType, sortValue) => {
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  
  const [pageNumber1, setPageNumber1] = useState(0);
  const [pageNumber2, setPageNumber2] = useState(0);
  const searchResultRef = useRef(null);

  // ฟังก์ชันที่จะเรียกเมื่อเปลี่ยนหน้า
  const handlePageChange1 = ({ selected }) => {
    setPageNumber1(selected);
  //   window.scrollTo({
  //     top: 630, // ตำแหน่งที่คุณต้องการเลื่อนไป (หน่วยเป็น pixel)
  //     behavior: 'smooth' // เลื่อนไปโดยการ animate (smooth scroll)
  // });
  };

  // ฟังก์ชันที่จะเรียกเมื่อเปลี่ยนหน้า
  const handlePageChange2 = ({ selected }) => {
  //   window.scrollTo({
  //     top: 630, // ตำแหน่งที่คุณต้องการเลื่อนไป (หน่วยเป็น pixel)
  //     behavior: 'smooth' // เลื่อนไปโดยการ animate (smooth scroll)
  // });
  };

 // จำนวนรายการต่อหน้า
 const itemsPerPage1 = 6;
 const pageCount1 = Math.ceil(newdata.length / itemsPerPage1);
 const offset1 = pageNumber1 * itemsPerPage1;
 const currentPageData1 = newdata.slice(offset1, offset1 + itemsPerPage1);


 const itemsPerPage2 = 10;
 const pageCount2 = Math.ceil(newdata.length / itemsPerPage2);
 const offset2 = pageNumber2 * itemsPerPage2;
 const currentPageData2 = newdata.slice(offset2, offset2 + itemsPerPage2);

  return (
      <div className="ltn__product-area ltn__product-gutter mt-80 mb-120">
        <Container>
          <Row>
          <Col xs={12} lg={{ span: 3, order: 0 }}>
              <SideBar products={products} getSortParams={getSortParams} asset={selectValue ? selectValue : defaultasset} onFilterChange={handleFilterChange}/>
            </Col>
            <Col xs={12} lg={{ span: 9, order: 1 }}>
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <Row>
                  
                    <div className="col-md-7">
                    <h3>ผลการค้นหา</h3>
                    <label>
                      About {newdata.length} results
                    </label>
                      </div>
                    <div className="col-md-3">
                        <Form.Select
                          className="rad-0-sort"
                          value={sortBy} 
                          onChange={handleChangeSortBy}
                        >
                          <option value="id">เรียงตาม</option>
                          <option value="date_new">วันที่อัปเดตล่าสุด</option>
                          <option value="date_old">วันที่อัปเดตเก่าสุด</option>
                          <option value="price_low">ราคา (ต่ำ - สูง)</option>
                          <option value="price_high">ราคา (สูง - ต่ำ)</option>
                          <option value="area_small">ขนาดพื้นที่ ( เล็ก - ใหญ่)</option>
                          <option value="area_big">ขนาดพื้นที่ ( ใหญ่ - เล็ก)</option>
                          
                        </Form.Select>
                      </div>
                      <div className="col-md-2">
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </div>
                      
                    
                  </Row>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                      {currentPageData1.length === 0 ? (
                         <div className="col-md-12 no-data">
                          <p> - ไม่พบข้อมูล - </p>
                         </div>
                        
                      ) : ('')}
                      {currentPageData1 && currentPageData1.map((data, key) => {
                          return (
                            <Col key={key} xs={12} sm={4}>
                              <RelatedProduct
                                baseUrl="shop/asset"
                                data={currentPageData1[key]}
                              />
                            </Col>
                          );
                        })}
                        
                      </Row>
                    </div>
                    <div className="ltn__pagination-area text-center">
                      <ReactPaginate
                        onPageChange={handlePageChange1}
                        initialPage={0}
                        // ใช้ค่า pageNumber เพื่อกำหนดหน้าที่ถูกเลือกเป็นหน้าแรก
                        forcePage={pageNumber1}
                        pageCount={pageCount1}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        nextLabel={<FaAngleDoubleRight />}
                        previousLabel={<FaAngleDoubleLeft />}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination ltn__pagination justify-content-center"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  {currentPageData1.length === 0 ? (
                         <div className="col-md-12 no-data">
                          <p> - ไม่พบข้อมูล - </p>
                         </div>
                        
                      ) : (
                        <div className="table-2">
                        <table >
                          <thead>
                            <tr>
                                <th>ชื่อ</th>
                                <th>สถานที่ตั้ง</th>
                                <th>คำอธิบาย</th>
                                <th>Zone</th>
                                <th>ประเภท</th>
                                <th>พื้นที่</th>
                                <th>ราคา</th>
                                <th>สิ่งอำนวยความสะดวก</th>
                            </tr>
                          </thead>
                          <tbody>

                          {currentPageData2 && currentPageData2.map((data, key) => {
                          return (
                            <ProductList
                              baseUrl="shop/right-sidebar"
                              data={currentPageData2[key]}
                            />
                          );
                        })}
                          </tbody>
                        </table>
                        </div>
                      )}
                      <div className="ltn__pagination-area text-center">
                      <ReactPaginate
                        onPageChange={handlePageChange2}
                        initialPage={0}
                        // ใช้ค่า pageNumber เพื่อกำหนดหน้าที่ถูกเลือกเป็นหน้าแรก
                        forcePage={pageNumber2}
                        pageCount={pageCount2}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        nextLabel={<FaAngleDoubleRight />}
                        previousLabel={<FaAngleDoubleLeft />}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination ltn__pagination justify-content-center"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              
            </Col>
            
          </Row>
        </Container>
      </div>
  );
}

export default ShopRightSideBar;
