import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState,useEffect   } from "react";

const HeaderTopInfo = function () {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          const response = await fetch("http://localhost:3001/contact");
          const data = await response.json();
          setData(data);
        } catch (error) {
            console.error("Error Fetching",error);
        } finally {
          setLoading(false)
        }
    }
    fetchData();
  }, []);


  return (
    <>
      {data.map((item, key) => {
        return (   
        <div className="ltn__top-bar-menu">
          <ul>
            <li>
              <Link href={`mailto:${item.email}`}>
                <FaEnvelope />
                <i></i> {item.email}
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <FaMapMarkerAlt />
                {item.address}
              </Link>
            </li>
          </ul>
        </div>
       );
      })}
    </>
  );
};

export default HeaderTopInfo;
