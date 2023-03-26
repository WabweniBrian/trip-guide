import { Link } from "react-router-dom";

const RecentPost = ({ recentPosts }) => {
  return (
    <div>
      {recentPosts?.map((blog) => {
        const { id, title, date_posted, image } = blog;
        return (
          <Link to={`/blog/${id}`} key={id} className="flex gap-x-3 my-4">
            <img src={image} alt={title} className="w-20 object-cover" />
            <div>
              <h1 className="text-base font-semibold hover:text-primary hover:underline transition-a">
                {title}
              </h1>
              <h5 className="text-sm capitalize opacity-70">{date_posted}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecentPost;
