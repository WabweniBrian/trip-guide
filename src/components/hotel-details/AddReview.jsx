import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AddReview = () => {
  return (
    <div className="pt-10">
      <h1 className="heading">attach your review</h1>
      <div className="mt-4 flex-center-between">
        <h1 className="text-xl font-semibold">Rating</h1>
        <div className="flex-align-center gap-x-3">
          {Array.apply(null, { length: 5 }).map((_, i) => (
            <div key={i} className="text-secondaryYellow">
              {i < 4 ? <FaStar /> : <FaStarHalfAlt />}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          name=""
          id=""
          rows="4"
          className="outline-none w-full p-2 border border-slate-300 dark:border-dark bg-slate-200 dark:bg-card-dark rounded-lg"
          placeholder="Write your detail review here..."
        ></textarea>
        <div className="flex-align-center gap-x-4 justify-end">
          <button className="btn bg-slate-200 hover:bg-slate-300 dark:bg-card-dark dark:hover:bg-hover-color-dark">
            cancel
          </button>
          <button className="btn btn-primary">submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
