import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../component/Header";
import Blogs from "../component/Blogs";
import Pagination from "../component/Pagination";

function BlogPages() {
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetcRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedblogs);
    } catch (error) {
      console.log("error Aa gya Blog Pages");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetcRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        {/* <h2>
          Blogs Tagged <span>#{tags}</span>
        </h2> */}
      </div>
      {loading ? (
        <p>Loading</p>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedblogs.map((post) => {
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>;
          })}
        </div>
      ) : (
        <div>
          <h2>No Data Found</h2>
        </div>
      )}
    </div>
  );
}

export default BlogPages;
