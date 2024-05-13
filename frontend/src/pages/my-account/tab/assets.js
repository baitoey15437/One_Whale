import Search from "@/components/search";
import { Row,Form } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

const Assets = ({data}) => {
  const [query, setQuery] = useState("");
  // console.log(data.status)
  return (
    <div>
      {data.status == 0 ? <h3>กำลังตรวจสอบข้อมูลการลงทะเบียน</h3> :
      <div className="ltn__shop-options">
        <h3>Assets</h3>
      <Row>
        <div className="col-md-5">
          <div className="short-by text-center">
            <Form.Select
              className="rad-0"
              onChange={(e) =>

                getFilterSortParams("filterSort", e.target.value)
              }
            >
              <option value="default">ประเภท Asset</option>
              <option value="priceHighToLow">WareHouse</option>
              <option value="priceLowToHigh">Vehicle</option>
              <option value="priceHighToLow">Shipping</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-7">
          <Search spaceBottom="mb-30" setQuery={setQuery} />
        </div>  
      </Row>
      <div className="btn-wrapper">
        <Link
          href="/add-asset/add1"
          className="theme-btn-1 btn btn-effect-1"
        >
          เพิ่ม Asset
        </Link>
        <Link
          href="/add-asset/test"
          className="theme-btn-1 btn btn-effect-1"
        >
          test
        </Link>
      </div>
    </div>
      }
      
  </div>
  );
};

export default Assets;