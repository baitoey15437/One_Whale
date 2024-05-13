import Link from "next/link";
const Payments = () => {

  return (
    <div className="ltn__myaccount-tab-content-inner">
    <div className="ltn__my-properties-table table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">บิลเลขที่</th>
            <th scope="col">รหัสการจอง</th>
            <th scope="col">วันที่อนุมัติ</th>
            <th scope="col">สถานะ</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
               Bill-000001
              </Link>  
            </td>
            <td>W000001</td>
            <td>Feb 22, 2022</td>
            <td>อนุมัติ</td>
          </tr>
          <tr>
            <td>
              <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
              Bill-000002
              </Link>  
            </td>
            <td>W000002</td>
            <td>Feb 22, 2022</td>
            <td>อนุมัติ</td>
          </tr>
          <tr>
            <td>
              <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
              Bill-000003
              </Link>  
            </td>
            <td>W000003</td>
            <td>Feb 22, 2022</td>
            <td>อนุมัติ</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ltn__pagination-area text-center">
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
    </div>
  </div>
  );
};

export default Payments;