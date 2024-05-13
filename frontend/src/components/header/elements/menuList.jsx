import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
const MenuList = ({ addListing }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/asset");
          const data = await response.json();
          setData(data);
        } catch (error) {
            console.error("Error Fetching",error);
        }
    }
    fetchData();
  }, []);


  const handleClick = () => {
    window.location.href = `/shop/right-sidebar?asset=${item.asset_id}`; // นำไปสู่หน้าอื่น
    window.location.reload(); // โหลดหน้าปัจจุบันใหม่
  };
  


  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="https://www.whale-logistics.co.th/" target="_blank">
          About
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/shop/right-sidebar">
          Asset &nbsp;
           <FaChevronDown />
        </Link>
        <ul>
        {data.map((item, key) => {
          return (
            <li>
            <Link href={`/shop/right-sidebar?asset=${item.asset_id}`} onClick={handleClick}>{item.asset_type}</Link>
          </li>
          );
        })}
        </ul>
      </li>
      <li className="menu-icon">
        <Link href="/blog/grid">
          News
        </Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/login">Sign In</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
