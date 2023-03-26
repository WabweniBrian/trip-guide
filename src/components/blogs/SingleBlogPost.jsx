import { Link } from "react-router-dom";
const SingleBlogPost = ({
  id,
  title,
  excerpt,
  date_posted,
  category,
  image,
  author: { name, role, avatar },
}) => {
  return (
    <div
      key={id}
      className={`md:flex group gap-4 bg-white p-3 rounded-lg border dark:bg-card-dark dark:border-dark ${
        id > 1 && "flex-col"
      }`}
    >
      <div className="overflow-hidden rounded-lg flex-shrink-0">
        <Link to={`/blog/${id}`} className="!opacity-100">
          <img
            src={image}
            alt={title}
            loading={"lazy"}
            className={`w-full md:w-96 h-64 object-cover group-hover:scale-125 transition-a sm:cursor-pointer ${
              id > 1 && "!w-full"
            }`}
          />
        </Link>
      </div>
      <div>
        <div className="flex-center-between mt-4 md:mt-0">
          <span
            className={`bg-secondaryYellow/20 text-secondaryYellow px-2 text-sm rounded-full`}
          >
            {category}
          </span>
          <p>{date_posted}</p>
        </div>
        <Link
          to={`/blog/${id}`}
          className="group-hover:text-primary transition-colors"
        >
          <h1 className="text-xl mt-3 font-bold">{title}</h1>
        </Link>
        <p className="mt-3">{excerpt}...</p>
        <div className="mt-4 flex-center-between">
          <div className="flex-align-center gap-x-2">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
            <div>
              <h1>{name}</h1>
              <p className="text-sm">{role}</p>
            </div>
          </div>
          <Link
            to={`/blog/${id}`}
            className="btn !opacity-100 border border-primary text-primary"
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
