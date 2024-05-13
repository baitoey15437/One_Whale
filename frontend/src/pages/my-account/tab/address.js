import { Container, Row, Col, Nav, Tab } from "react-bootstrap";


const Address = ({data}) => {

  return (
    <div>
    {data.map((address, key) => {
      return (
        <div className="ltn-author-introducing clearfix">
          <div className="ltn__myaccount-tab-content-inner">
            <div className="row">
              <div className="col-md-6">
                <h6>ชื่อบริษัท</h6>
                <h5>{address.company_name}</h5>
              </div>
              <div className="col-md-6">
                <h6>เบอร์โทร</h6>
                <h5>{address.phone}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h6>ที่อยู่</h6>
                <h5>{address.address}&nbsp;&nbsp;{address.district}&nbsp;&nbsp;{address.amphure}&nbsp;&nbsp;{address.province}&nbsp;&nbsp;{address.zip_code}</h5>
              </div>
            </div>
          </div>
        </div>
        );
    })}
  </div>
  );
};

export default Address;