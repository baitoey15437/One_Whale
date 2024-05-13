import { Row } from "react-bootstrap";
import Search from "@/components/search";
import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [query, setQuery] = useState("");

  return (
    <p>Waiting</p>
    // <div>
    // <Row>
    // <div className="col-md-5">
    //       <div className="short-by text-center">
            
    //       </div>
    //       </div>
    //       <div className="col-md-12">
    //         <Search spaceBottom="mb-30" setQuery={setQuery} />
    //         </div>
        
    //   </Row>
    //   <div className="btn-wrapper">
    //         <button className="theme-btn-1 btn btn-effect-1" onClick={() => dispatch(addToCart(productData))}>
    //           เพิ่มหัวข้อ
    //         </button>
    //         </div>

    //             <div className="ltn__myaccount-tab-content-inner">
    //               <div className="ltn__my-properties-table table-responsive">
    //                 <table className="table">
    //                   <thead>
    //                     <tr>
    //                       <th scope="col">หัวข้อ</th>
    //                       <th scope="col"></th>
    //                       <th scope="col">วันที่เพิ่ม</th>
    //                       <th scope="col">สถานะ</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <td>
    //                         <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
    //                          การเปลี่ยนที่อยู่จัดส่งเอกสาร
    //                         </Link>  
    //                       </td>
    //                       <td></td>
    //                       <td>Feb 22, 2022</td>
    //                       <td></td>
    //                     </tr>
    //                     <tr>
    //                       <td>
    //                         <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
    //                         สอบถามข้อมูลการจัดส่ง
    //                         </Link>  
    //                       </td>
    //                       <td></td>
    //                       <td>Feb 22, 2022</td>
    //                       <td></td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>
    //               <div className="ltn__pagination-area text-center">
    //                 <div className="ltn__pagination">
    //                   <ul>
    //                     <li>
    //                       <Link href="#">
    //                         <i className="fas fa-angle-double-left"></i>
    //                       </Link>
    //                     </li>
    //                     <li>
    //                       <Link href="#">1</Link>
    //                     </li>
    //                     <li className="active">
    //                       <Link href="#">2</Link>
    //                     </li>
    //                     <li>
    //                       <Link href="#">3</Link>
    //                     </li>
    //                     <li>
    //                       <Link href="#">...</Link>
    //                     </li>
    //                     <li>
    //                       <Link href="#">10</Link>
    //                     </li>
    //                     <li>
    //                       <Link href="#">
    //                         <i className="fas fa-angle-double-right"></i>
    //                       </Link>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //             </div>
  );
};

export default Contact;