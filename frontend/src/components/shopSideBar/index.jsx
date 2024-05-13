import {
  getIndividualAminities,
  getIndividualAminitiesList,
  priceRange,
  bedBath,
  getIndividualCategories,
  setActiveSort,
} from "@/lib/product";
import FilterByPrice from "../FilterByPrice";
import { Form,Nav } from "react-bootstrap";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Filter from "./filter"



const SideBar = ({ products, getSortParams, asset }) => {
  //console.log(asset);
  const aminities = getIndividualAminities(products);
  const aminitiesList = getIndividualAminitiesList(products);
  const priceRanges = priceRange(products);
  const bedBaths = bedBath(products);
  const categories = getIndividualCategories(products);

  return (
    <>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <h3 className="mb-10">Advance Information</h3>
        <label className="mb-30">
          <small>About 9,620 results (0.62 seconds) </small>
        </label>
        {/* <!-- Advance Information widget --> */}
        <div className="widget ltn__menu-widget">
          <Filter products={products} getSortParams={getSortParams} asset={asset}/>
          {/* <h4 className="ltn__widget-title">สถานที่ตั้ง</h4>
          {priceRanges.length > 0 ? (
            <>
              
                <Form.Select className="form-control nice-select rad-0">
                  <option >ชลบุรี</option>
                  <option>กรุงเทพมหานคร</option>
                  <option>ระยอง</option>
                  <option>จันทบุรี</option>
                </Form.Select>
            </>
          ) : (
            "No categories found"
          )}
          <hr />
          <div className="ltn__price-filter-widget mt-30">
            <h4 className="ltn__widget-title">ขนาดพื้นที่ (ตารางวา)</h4>
            <div className="price_filter">
              <FilterByPrice />
            </div>
          </div>
          <hr />
          <h4 className="ltn__widget-title">สิ่งอำนวยความสะดวก</h4>
          {aminities.length > 0 ? (
            <>
              <ul>
                {aminities &&
                  aminities.map((aminitie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {aminitie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("propertyTypes", aminitie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}
         */}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
