import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getProductCartQuantity } from "@/lib/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "@/store/slices/compare-slice";

import {
  FaShoppingBag,
  FaRegHeart,
  FaExchangeAlt,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import ProductRating from "../product/ProductRating";

const SuccessModal = ({
  productData,
  onHide,
  show,
  slug,
  discountedprice,
  productprice,
  wishlistitem,
  compareitem,
}) => {
  const modalClose = () => {
    onHide();
  };

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [quantityCount, setQuantityCount] = useState(1);

  return (
    <Modal
      show={show}
      onHide={modalClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="ltn__modal-area ltn__quick-view-modal-area"
    >
      <Modal.Body>
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
          <h3>test</h3>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
