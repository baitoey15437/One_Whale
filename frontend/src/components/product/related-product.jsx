import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import React, { useState,useEffect  } from "react";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const RelatedProduct = ({
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

  const formatDate = (data) =>{
    const date = new Date(data);
    const formattedDate = format(date, "d MMM yyyy");
    return formattedDate;
  }


  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="ltn__search-by-place-item">
          <div className="search-by-place-img">
            <Link href={`/${baseUrl}/${data.asset.assetdet_id}`}>
              <img
                src={`/assets/${data.asset.head_img}`}
              />
            </Link>
            <div className="search-by-place-badge">
              <ul>
                <li>{data.zone.zone}</li>
                <li>{data.zone.type}</li>
              </ul>
            </div>
            {/* <div className="search-by-place-badge2">
              <ul>
                <li>{formatDate(data.asset.update_date)}</li>
              </ul>
            </div> */}
          </div>  
        </div>
        <div className="product-info">
          <div className="product-price">
            
          </div>
          <h3 className="product-title">
            <Link href={`/${baseUrl}/${data.asset.assetdet_id}`}>{data.asset.asset_name}</Link>
          </h3>
           <div className="product-img-location">
            <ul>
              <li>
                  <i className="flaticon-pin"></i>
                  &nbsp;{data.location.amphure}&nbsp;&nbsp;{data.location.province}
              </li>
            </ul>
          </div>
          <div className="product-description">
            <p>{data.asset.description}</p>
            <p><i className="flaticon-square-shape-design-interface-tool-symbol"></i>&nbsp;&nbsp;{formattedNumber(data.asset.size)}&nbsp;&nbsp;ตารางเมตร
            </p>
            
          </div>
           <div className="ltn__search-by-place-item2">
            <div className="search-by-place-img">
              <div className="search-by-place-badge">
                <ul>
                {data.option.map((option, key) => {
              return (
                  <li>{option.option_det_name}</li>
                  );
                })}
                </ul>
              </div>
            </div>  
          </div>
          
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before">
            {data.option.map((option, key) => {
              return (
                <li>
                {option.option_name}
              </li>
              );
            })}
          </ul> */}
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>{formattedNumber(data.asset.range_min)} - {formattedNumber(data.asset.range_max)}
              <label>&nbsp;&nbsp;บาท</label></label>
             {/* ({data.asset.price.toLocaleString()}) */}
            </span>
          </div>
        </div>
      </div>

      {/* <QuickViewtModal
        productData={productData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      /> */}
    </>
  );
};

export default RelatedProduct;
