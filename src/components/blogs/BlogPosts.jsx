/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../features/dataSlice";
import SingleBlogPost from "./SingleBlogPost";
import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector(dataStore);

  const url = "/data/blogs.json";

  const fetchBlogs = async () => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="pt-10">
      <h1 className="text-4xl md:text-5xl font-bold relative w-fit before:absolute before:w-1/2 before:h-1 before:bg-secondaryRed before:-bottom-2 before:left-1/2 before:-translate-x-1/2 capitalize mx-auto">
        travel blog
      </h1>
      {loading ? (
        <div className="min-h-screen flex-center-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="mt-5">
            {blogs.slice(0, 1).map((post) => (
              <SingleBlogPost {...post} key={post.id} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {blogs.slice(1, 5).map((post) => (
              <div className="flex-1 basis-[20rem]" key={post.id}>
                <SingleBlogPost {...post} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
