import {
  getIndividualAminities,
  getIndividualAminitiesList,
  priceRange,
  bedBath,
  getIndividualCategories,
  setActiveSort,
} from "@/lib/product";
import FilterByPrice from "../FilterByPrice";
import { Form,Nav,Col } from "react-bootstrap";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Filter from "./filter"
import { useState,useEffect } from "react";


const SideBar = ({ getSortParams, asset, onFilterChange }) => {

  const [geographies, setgeographies] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [zones, setZones] = useState([]);
  const [zone_types, setZonetypes] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const geographies = await fetch("http://localhost:3001/api/geographies");
          const geographies_data = await geographies.json();
          setgeographies(geographies_data);
          const zone = await fetch("http://localhost:3001/api/zone");
          const zone_data = await zone.json();
          setZones(zone_data);
          const zone_type = await fetch("http://localhost:3001/api/zone_type");
          const zone_type_data = await zone_type.json();
          setZonetypes(zone_type_data);
          const option = await fetch("http://localhost:3001/api/option");
          const option_data = await option.json();
          setOptions(option_data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);

  const [geographie, setGeographie] = useState('');
  const [province, setProvince] = useState('');
  const [checkAllZone, setCheckAllZone] = useState(true);
  const [checkboxesZone, setCheckboxesZone] = useState([]);
  const [checkAllType, setCheckAllType] = useState(true);
  const [checkboxesType, setCheckboxesType] = useState([]);
  const [checkAllOption, setCheckAllOption] = useState(true);
  const [checkboxesOption, setCheckboxesOption] = useState([]);
  const [price, setPrice] = useState({ min: null, max: null });
  const [area, setArea] = useState({ min: null, max: null });

  useEffect(() => {
    if (zones.length > 0) {
      const newzone = [];
      zones.forEach(item => {
        newzone.push(item.zone);
      });
      setCheckboxesZone(newzone);
    }
  }, [zones]);

  useEffect(() => {
    if (zone_types.length > 0) {
      const newzonetype = [];
      zone_types.forEach(item => {
        newzonetype.push(item.type);
      });
      setCheckboxesType(newzonetype);
    }
  }, [zone_types]);



  const handleGeographiesChange = async (event) => {
    const geography_id = event.target.value;
    setGeographie(geography_id);
    setProvince('');
    onFilterChange({geography_id: geography_id,province_id: '', zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: price , area: area})
  
    try {
      const response = await fetch(`http://localhost:3001/api/provinces/${geography_id}`);
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการเรียก API');
      }
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
        console.error("Error Fetching",error);
    }
  };

  const handleProvincesChange = async (event) => {
    const province_id = event.target.value;
    setProvince(province_id);
    onFilterChange({geography_id: geographie , province_id: province_id , zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: price, area: area})  
  };



  const [arearatio, setAreaRatio] = useState('all');

  const handleAreaRatioChange = (e) => {
    const value = e.target.value
    setAreaRatio(value);
    if (value == 'all') {
     setArea({ min: null, max: null });
     onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: price, area: { min: null, max: null }})
    }
  };

  const handleInputAreaChange = (e) => {
    const { name, value } = e.target;
    let number;
    if (value == '') {
      number = null;
    } else{
      number = parseFloat(value);
    }
    setArea({ ...area, [name]: number });
  };

  const handleAreaSubmit = () => {
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: price , area: area}) 
  };



  const [priceratio, setPriceRatio] = useState('all');

  const handlePriceRatioChange = (e) => {
    const value = e.target.value
    setPriceRatio(value);
    if (value == 'all') {
     setPrice({ min: null, max: null });
     onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: { min: null, max: null } , area: area})
    }
  };

  const handleInputPriceChange = (e) => {
    const { name, value } = e.target;
    let number;
    if (value == '') {
      number = null;
    } else{
      number = parseFloat(value);
    }
    setPrice({ ...price, [name]: number });
  };

  const handlePriceSubmit = () => {
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: checkboxesOption , price: price , area: area}) 
  };


 //Checkbox Zone 

  const handleCheckAllZone = (event) => {
    const { checked } = event.target;
    setCheckAllZone(checked);
    if(checked == true){
      if (zones.length > 0) {
      const newzone = [];
      zones.forEach(item => {
        newzone.push(item.zone);
      });
      setCheckboxesZone(newzone);
      onFilterChange({geography_id: geographie , province_id: province , zone: newzone , type: checkboxesType , option: checkboxesOption , price: price , area: area}) 
      }
    }else{
      setCheckboxesZone([]);
      onFilterChange({geography_id: geographie , province_id: province , zone: ["No Data"] , type: checkboxesType , option: checkboxesOption , price: price , area: area}) 
    }
  };

  const handleCheckboxChangeZone = (item,index) => {
    let updatedCheckboxesZone = [];
    if (checkboxesZone.includes(item)) {
      updatedCheckboxesZone = checkboxesZone.filter((n) => n !== item);
    } else {
      updatedCheckboxesZone = [...checkboxesZone, item];
    }

    setCheckboxesZone(updatedCheckboxesZone);
    onFilterChange({geography_id: geographie , province_id: province , zone: updatedCheckboxesZone , type: checkboxesType , option: checkboxesOption , price: price , area: area}) 
    if (updatedCheckboxesZone.length === zones.length) {
      setCheckAllZone(true);
    } else {
      setCheckAllZone(false);
    }
  };

  

//Checkbox Type 
const handleCheckAllType = (event) => {
  const { checked } = event.target;
  setCheckAllType(checked);
  if(checked == true){
    if (zone_types.length > 0) {
    const newzonetype = [];
    zone_types.forEach(item => {
      newzonetype.push(item.type);
    });
    setCheckboxesType(newzonetype);
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: newzonetype , option: checkboxesOption , price: price , area: area}) 
    }
  }else{
    setCheckboxesType([]);
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone, type:  ["No Data"] , option: checkboxesOption , price: price , area: area}) 
  }
};

const handleCheckboxChangeType = (item,index) => {
  let updatedCheckboxesType = [];
  if (checkboxesType.includes(item)) {
    updatedCheckboxesType = checkboxesType.filter((n) => n !== item);
  } else {
    updatedCheckboxesType = [...checkboxesType, item];
  }

  setCheckboxesType(updatedCheckboxesType);
  onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: updatedCheckboxesType , option: checkboxesOption , price: price , area: area}) 
  if (updatedCheckboxesType.length === zone_types.length) {
    setCheckAllType(true);
  } else {
    setCheckAllType(false);
  }
};

//Checkbox Option
const handleCheckAllOption = (event) => {
  const { checked } = event.target;
  setCheckAllOption(checked);
  
  if (checked) {
    setCheckboxesOption([]);
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: [] , price: price , area: area})   
  } else {
    setCheckboxesOption([options[0].option_name]);
    onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: [options[0].option_name] , price: price , area: area}) 
  }
  // setCheckboxesOption([]);
  // onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: [] , price: price , area: area})   
};

const handleCheckboxChangeOption = (item,index) => {
  let updatedCheckboxesOption = [];
  setCheckAllOption(false);
  
  if (checkboxesOption.includes(item)) {
    updatedCheckboxesOption = checkboxesOption.filter((n) => n !== item);
  } else {
    updatedCheckboxesOption = [...checkboxesOption, item];
  }
  console.log(updatedCheckboxesOption);
  if(updatedCheckboxesOption.length === 0){
    setCheckAllOption(true);
  }
  setCheckboxesOption(updatedCheckboxesOption);
  onFilterChange({geography_id: geographie , province_id: province , zone: checkboxesZone , type: checkboxesType , option: updatedCheckboxesOption , price: price , area: area}) 
};

const formattedNumber = (numberString) => {
  // แปลง string เป็นตัวเลข
const number = parseFloat(numberString);

  // ตรวจสอบว่าเป็นตัวเลขที่ถูกต้องหรือไม่
  if (isNaN(number)) {
  return '';
  }

  // แปลงตัวเลขเป็นรูปแบบที่มีลูกน้ำ
  return number.toLocaleString('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
  });
};

  return (
    <>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        {/* <!-- Advance Information widget --> */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">ภูมิภาค</h4>
          <Form.Select 
            value={geographie} 
            onChange={handleGeographiesChange}
            className="form-control nice-select rad-0">
            <option value="" selected>ทั้งหมด</option>
            {geographies.map((item, key) => {
              return (
                <option value={item.id}>{item.name}</option>
              );
            })}
          </Form.Select>
          <h4 className="ltn__widget-title">จังหวัด</h4>
          <Form.Select 
            value={province} 
            onChange={handleProvincesChange}
            className="form-control nice-select rad-0">
            <option value="" selected>ทั้งหมด</option>
            {provinces.map((item, key) => {
              return (
                <option value={item.id}>{item.name_th}</option>
              );
            })}
          </Form.Select>
          <h4 className="ltn__widget-title">Zone</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={checkAllZone}
                  onChange={handleCheckAllZone}
                />
                ทั้งหมด
                <span className="checkmark"></span>
              </label>
            </li>
            {zones.map((item, index) => (
              <li key={index}>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  value={item.zone}
                  checked={checkboxesZone.includes(item.zone)}
                  onChange={() => handleCheckboxChangeZone(item.zone,index)}
                />
                {item.zone}
                <span className="checkmark"></span>
              </label>
              </li>
            ))}
          </ul>
        <h4 className="ltn__widget-title mt-30">ประเภท</h4>
        <ul>
            <li>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={checkAllType}
                  onChange={handleCheckAllType}
                />
                ทั้งหมด
                <span className="checkmark"></span>
              </label>
            </li>
            {zone_types.map((item, index) => (
              <li key={index}>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  value={item.type}
                  checked={checkboxesType.includes(item.type)}
                  onChange={() => handleCheckboxChangeType(item.type,index)}
                />
                {item.type}
                <span className="checkmark"></span>
              </label>
              </li>
            ))}
          </ul>
        <div className="ltn__price-filter-widget mt-30">
          <h4 className="ltn__widget-title">ขนาดพื้นที่ (ตารางเมตร)</h4>
          <div>
            <label>
              <input
                type="radio"
                value="all"
                checked={arearatio === 'all'}
                onChange={handleAreaRatioChange}
                className="ratio-item"
              />
              แสดงข้อมูลทั้งหมด
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="range"
                checked={arearatio === 'range'}
                onChange={handleAreaRatioChange}
                className="ratio-item"
              />
              แสดงข้อมูลตาม Range
            </label>
            <br />
            {arearatio === 'range' && (
               <div className="row">
              <Col xs={12} md={9}>
              <p>Area Range: <br /> {formattedNumber(area.min)} - {formattedNumber(area.max)}</p>
              </Col>
              <Col xs={12} md={9}>
              <label>min</label>
                <input type="number" name="min" value={area.min} onChange={handleInputAreaChange} />
              </Col>
              <Col xs={12} md={9}>
              <label>max</label>
                <input type="number" name="max" value={area.max} onChange={handleInputAreaChange} />
              </Col>
              <Col xs={12} md={9}>
              <button  className="theme-btn-1 btn-wrapper-3" onClick={handleAreaSubmit}>Submit</button>
              </Col>   
            </div>
            )}
          </div>
        </div>
        <div className="ltn__price-filter-widget mt-20">
          <h4 className="ltn__widget-title">ราคา</h4>
          <div>
            <label>
              <input
                type="radio"
                value="all"
                checked={priceratio === 'all'}
                onChange={handlePriceRatioChange}
                className="ratio-item"
              />
              แสดงข้อมูลทั้งหมด
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="range"
                checked={priceratio === 'range'}
                onChange={handlePriceRatioChange}
                className="ratio-item"
              />
              แสดงข้อมูลตาม Range
            </label>
            <br />
            {priceratio === 'range' && (
               <div className="row">
              <Col xs={12} md={9}>
              <p>Price Range: <br /> {formattedNumber(price.min)} - {formattedNumber(price.max)}</p>
              </Col>
              <Col xs={12} md={9}>
              <label>min</label>
                <input type="number" name="min" value={price.min} onChange={handleInputPriceChange} />
              </Col>
              <Col xs={12} md={9}>
              <label>max</label>
                <input type="number" name="max" value={price.max} onChange={handleInputPriceChange} />
              </Col>
              <Col xs={12} md={9}>
              <button  className="theme-btn-1 btn-wrapper-3" onClick={handlePriceSubmit}>Submit</button>
              </Col>   
            </div>
            )}
          </div>
         
        </div>
        <h4 className="ltn__widget-title  mt-20">สิ่งอำนวยความสะดวก</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={checkAllOption}
                  onChange={handleCheckAllOption}
                />
                แสดงข้อมูลทั้งหมด
                <span className="checkmark"></span>
              </label>
            </li>
            {options.map((item, index) => (
              <li key={index}>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  value={item.option_det_name}
                  checked={checkboxesOption.includes(item.option_det_name)}
                  onChange={() => handleCheckboxChangeOption(item.option_det_name,index)}
                />
                {item.option_det_name}
                <span className="checkmark"></span>
              </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
