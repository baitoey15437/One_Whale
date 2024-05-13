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


const Filter = ({ products, getSortParams, asset }) => {
  // console.log(asset);
  const aminities = getIndividualAminities(products);
  const aminitiesList = getIndividualAminitiesList(products);
  const priceRanges = priceRange(products);
  const bedBaths = bedBath(products);
  const categories = getIndividualCategories(products);

  switch (asset) {
    case "warehouse" :
    return (
      <>
        <h4 className="ltn__widget-title">สถานที่ตั้ง</h4>
          <Form.Select className="form-control nice-select rad-0">
            <option >ชลบุรี</option>
            <option>กรุงเทพมหานคร</option>
            <option>ระยอง</option>
            <option>จันทบุรี</option>
          </Form.Select>
        <hr />
        <div className="ltn__price-filter-widget mt-30">
          <h4 className="ltn__widget-title">ขนาดพื้นที่ (ตารางวา)</h4>
            <div className="price_filter">
              <FilterByPrice />
            </div>
        </div>
        <hr />
        <h4 className="ltn__widget-title">สิ่งอำนวยความสะดวก</h4>
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
    );
    case "vehicle" :
    return (
      <>
        <h4 className="ltn__widget-title">filter vehicle</h4>
      </>
    );

    case "shipping" :
    return (
      <>
        <h4 className="ltn__widget-title">filter shipping</h4>
      </>
    );

    case "it-and-program" :
    return (
      <>
        <h4 className="ltn__widget-title">filter it</h4>
      </>
    );

    case "other-asset" :
    return (
      <>
        <h4 className="ltn__widget-title">filter other asset</h4>
      </>
    );

  }
};

export default Filter;
