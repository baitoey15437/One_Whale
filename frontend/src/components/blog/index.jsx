import Link from "next/link";
import { FaRegUser, FaTags, FaRegCalendarAlt } from "react-icons/fa";

import { format } from 'date-fns';
import { th } from 'date-fns/locale';
const BlogItem = ({ baseUrl, data }) => {
  

  const formatDate = (data) =>{
    const date = new Date(data);
    const formattedDate = format(date, "d MMM yyyy", { locale: th });
    return formattedDate;
  }

  return (
    <>
      <div className="ltn__blog-item ltn__blog-item-3">
        <div className="ltn__blog-img">
          <Link href={`${baseUrl}/${data.news_id}`}>
            <img src={`/imagehead/${data.head_img}/`} alt={`${data.news_name}`} />
          </Link>
        </div>
        <div className="ltn__blog-brief">
          <h3 className="ltn__blog-title">
            <Link href={`${baseUrl}/${data.news_id}`}>{data.news_name}</Link>
          </h3>
          <div className="ltn__blog-meta-btn">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-date">
                  <FaRegCalendarAlt className="me-2" />
                  {formatDate(data.update_date)}
                </li>
              </ul>
            </div>
            <div className="ltn__blog-btn">
              <Link href={`${baseUrl}/${data.news_id}`}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
