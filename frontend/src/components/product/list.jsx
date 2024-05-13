import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Table from 'react-bootstrap/Table';
const ProductList = ({
  data,
  productData,
  slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {
  let badgeText = "";

  
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const wishListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Wishlist
    </Tooltip>
  );
  const quickViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Quick View
    </Tooltip>
  );
  const addToCartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Add To Cart
    </Tooltip>
  );

  const formattedNumber = (numberString) => {
    // แปลง string เป็นตัวเลข
 const number = parseFloat(numberString);

 // ตรวจสอบว่าเป็นตัวเลขที่ถูกต้องหรือไม่
 if (isNaN(number)) {
   return 'Invalid number';
 }

 // แปลงตัวเลขเป็นรูปแบบที่มีลูกน้ำ
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  };

  return (
    <>
        <tr>
          <td className="width-20 name">
            <Link href={`/${baseUrl}/`}>{data.asset.asset_name}</Link>
          </td>
          <td>
            {data.location.amphure}<br/>{data.location.province}
          </td>
          <td className="width-40 desc">
          <div class="cell-content">
            {data.asset.description}
            </div>
          </td>
          <td>
            {data.zone.zone}
          </td>
          <td>
            {data.zone.type}
          </td>
          <td>
            {formattedNumber(data.asset.size)}
          </td>
          <td>
            {formattedNumber(data.asset.range_min)} - {formattedNumber(data.asset.range_max)}
          </td>
          <td className="width-30">
            <ul>
            {data.option.map((option, key) => {
              return (
                <li>
                {option.option_det_name}
              </li>
              );
            })}
            </ul>
          </td>
        </tr>
    </>
  );
};

export default ProductList;
