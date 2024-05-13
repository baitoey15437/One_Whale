import Link from "next/link";
import {FaTrashAlt} from "react-icons/fa";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const Document = ({data,attributes}) => {

  const document_supplier = attributes.map(attr => ({
    ...attr,
    file: data[attr.name],
    upload_date: data[`date_${attr.name}`]
  }));

  const handleDownloadFile = (file) => {
    if (file) {
      const link = document.createElement('a');
      const path = '/supplier/'
      link.href = `${path}${file}`;
      link.download = file;
      link.click();
    }
};

const formatDate = (data) =>{
  const date = new Date(data);
  const formattedDate = format(date, "d MMM yyyy");
  return formattedDate;
}

  return (
    <div className="ltn__myaccount-tab-content-inner"> 
    <h3>Document</h3>
      <div className="ltn__my-properties-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">เอกสาร</th>
              <th scope="col"></th>
              <th scope="col">วันที่เพิ่มเอกสาร</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {document_supplier.map((document, key) => {
            return (
            <tr>
              <td>
              {document.label}
              </td>
              <td></td>
              <td>{formatDate(document.upload_date)}</td>
              <td>
              <button onClick={() => handleDownloadFile(document.file)}>คลิกเพื่อดูไฟล์</button>
              </td>
            </tr>

            );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="ltn__pagination-area text-center">
        <div className="ltn__pagination">
          <ul>
            <li>
              <Link href="#">
                <i className="fas fa-angle-double-left"></i>
              </Link>
            </li>
            <li>
              <Link href="#">1</Link>
            </li>
            <li className="active">
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">...</Link>
            </li>
            <li>
              <Link href="#">10</Link>
            </li>
            <li>
              <Link href="#">
                <i className="fas fa-angle-double-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Document;