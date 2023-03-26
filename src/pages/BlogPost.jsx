/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link, useParams, useLocation } from "react-router-dom";
import { RecentPost } from "../components/blogs";
import { useDispatch, useSelector } from "react-redux";
import { dataStore, setIsLoading } from "../features/dataSlice";

const BlogPost = () => {
  const { id } = useParams();
  const route = useLocation();
  const dispatch = useDispatch();

  const [singleBlogPost, setSingleBlogpost] = useState({});
  const [recentPosts, setRecentposts] = useState([]);

  const { loading } = useSelector(dataStore);

  const fetchBlogPost = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await fetch("/data/blogs.json");
      const blogs = await res.json();
      const blogPost = blogs?.find((blog) => blog.id === parseInt(id));
      const recent = blogs?.filter((blog) => blog.id !== parseInt(id));
      setSingleBlogpost(blogPost);
      setRecentposts(recent);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogPost();
  }, [route]);

  const { title, description, date_posted, image, category, author } =
    singleBlogPost;
  return !loading ? (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <section className="flex flex-col md:flex-row gap-6">
        <article className="flex-5">
          <img
            src={image}
            alt={title}
            className="w-full md:h-[400px] object-cover"
          />
          <button className="rounded-md px-4 py-1 mt-4 bg-primary text-white capitalize">
            {category}
          </button>
          <h1 className="my-4 text-2xl md:text-4xl">{title}</h1>
          <div className="flex-align-center mt-4 gap-x-2">
            <img
              src={author?.avatar}
              alt={author?.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-base">{author?.name}</p>
              <p className="text-sm text-muted italic">{date_posted}</p>
            </div>
          </div>
          <div className="flex-align-center gap-5 flex-col md:flex-row mt-4 w-fit">
            <Link className="flex-align-center gap-3">
              <FiHeart />
              <p>Make favorite</p>
            </Link>
            <div className="flex-align-center gap-1">
              <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#1352d1] text-white">
                <FaFacebook /> Share
              </button>
              <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#1ca9ce] text-white">
                <FaTwitter /> Tweet
              </button>
              <button className="btn text-sm !capitalize flex-align-center gap-x-2 shrink-0 !bg-[#ff174f] text-white">
                <FaInstagram /> Share
              </button>
            </div>
          </div>

          <p className="mt-4">{description}</p>
        </article>

        <aside className="flex-2 border-light px-4 py-2 h-fit sticky top-0">
          <h1 className="text-xl my-2 ml-2">Search</h1>
          <div className="border dark:border-dark rounded grid place-center px-2 py-2 search">
            <input
              type="search"
              name=""
              id=""
              className="px-4 py-1 bg-transparent outline-none"
              placeholder="Search for posts.."
            />
          </div>
          <h1 className="text-xl my-2 ml-2">Our Social medial handles</h1>
          <div className="flex-center-center gap-1">
            <button className="btn text-sm !capitalize shrink-0 !bg-[#1352d1] text-white">
              Facebook
            </button>
            <button className="btn text-sm !capitalize shrink-0 !bg-[#1ca9ce] text-white">
              Twitter
            </button>
            <button className="btn text-sm !capitalize  shrink-0 !bg-[#ff174f] text-white">
              Instagram
            </button>
          </div>
          <h1 className="text-xl mt-8 mb-3 ml-2">Recent Posts</h1>
          <RecentPost recentPosts={recentPosts} />
        </aside>
      </section>
    </div>
  ) : (
    <div className="min-h-screen flex-center-center">
      <div className="min-h-screen flex-center-center">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default BlogPost;
