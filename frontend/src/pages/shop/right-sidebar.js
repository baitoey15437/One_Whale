import React,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { getSortedProducts, productSlug ,getDiscountPrice} from "@/lib/product";
import { Layout } from "@/layouts";
import { FaThLarge, FaThList, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import SideBar from "@/components/shopSideBar";
import RelatedProduct from "@/components/product/related-product";
import ProductList from "@/components/product/list";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
import Table from 'react-bootstrap/Table';


function ShopRightSideBar() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const keyword = urlParams.get('keyword');
  const defaultasset = urlParams.get('asset')

  const [selectValue, setSelectValue] = useState(defaultasset);

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  console.log("defaultasset =" + defaultasset);
  console.log("selectValue =" + selectValue);

  const { products } = useSelector((state) => state.product);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 6;
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
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
  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;

    setSortedProducts(sortedProducts);

    setCurrentItems(sortedProducts.slice(offset, offset + pageLimit));

    setCurrentItems(
      SearchProduct(sortedProducts.slice(offset, offset + pageLimit))
    );
  }, [
    offset,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    query,
  ]);

  useEffect(() => {
    const endOffset = offset + pageLimit;
    setCurrentItems(products.slice(offset, endOffset));
    setPageCount(Math.ceil(products.length / pageLimit));
  }, [offset, pageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % products.length;
    setOffset(newOffset);
  };

  
  

  return (
    <Layout topbar={true}>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb
        title="Asset"
        sectionPace=""
        currentSlug="Asset"
      />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <Row>
                    <div className="col-md-5">
                      <div className="short-by text-center">
                        <Form.Select
                          className="rad-0"
                          value={selectValue}
                          onChange={onChange}
                        >
                          <option value="">เลือกประเภท Asset</option>
                          <option value="1">WareHouse</option>
                          <option value="2">Vehicle</option>
                          <option value="3">Shipping</option>
                          <option value="4">IT & Program</option>
                          <option value="5">Other Asset</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className="col-md-5">
                     
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
                  <Row>
                  <div className="col-md-12">
                      <Search spaceBottom="mb-30" setQuery={setQuery} value={keyword}/>
                    </div>  
                  </Row>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    {/* {selectValue && <h2 className="mt-3">{selectValue}</h2>} */}
                      <Row>
                        {currentItems.map((product, key) => {
                          const slug = productSlug(product.title);
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);
                          const productPrice = product.price.toFixed(2);
                          const cartItem = cartItems.find(
                            (cartItem) => cartItem.id === product.id
                          );
                          const wishlistItem = wishlistItems.find(
                            (wishlistItem) => wishlistItem.id === product.id
                          );
                          const compareItem = compareItems.find(
                            (compareItem) => compareItem.id === product.id
                          );
                          return (
                            <Col key={key} xs={12} sm={6}>
                              <RelatedProduct
                                slug={slug}
                                baseUrl="shop/right-sidebar"
                                productData={product}
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <Row>
                        <Table>
                          <thead>
                            <tr>
                                <th>ชื่อ Asset</th>
                                <th>สถานที่ตั้ง</th>
                                <th>คำอธิบาย</th>
                                <th>สิ่งอำนวยความสะดวก</th>
                                <th>พื้นที่</th>
                            </tr>
                          </thead>
                          <tbody>

                          {currentItems.map((product, key) => {
                          const slug = productSlug(product.title);
                          const discountedPrice = getDiscountPrice(
                            product.price,
                            product.discount
                          ).toFixed(2);
                          const productPrice = product.price.toFixed(2);
                          const cartItem = cartItems.find(
                            (cartItem) => cartItem.id === product.id
                          );
                          const wishlistItem = wishlistItems.find(
                            (wishlistItem) => wishlistItem.id === product.id
                          );
                          const compareItem = compareItems.find(
                            (compareItem) => compareItem.id === product.id
                          );
                          return (
                            <ProductList
                              slug={slug}
                              baseUrl="shop/right-sidebar"
                              productData={product}
                                discountedPrice={discountedPrice}
                              productPrice={productPrice}
                              cartItem={cartItem}
                              wishlistItem={wishlistItem}
                              compareItem={compareItem}
                            />
                          );
                        })}
                            
                          </tbody>
                        </Table>


                        
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="ltn__pagination-area text-center">
              <ReactPaginate
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
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
            </Col>
            <Col xs={12} lg={4}>
              <SideBar products={products} getSortParams={getSortParams} asset={selectValue ? selectValue : defaultasset}/>
            </Col>
          </Row>
        </Container>
      </div>
     
    </Layout>
  );
}

export default ShopRightSideBar;
