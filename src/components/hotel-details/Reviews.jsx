import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
  return (
    <div>
      {Array.apply(null, { length: 2 }).map((_, i) => (
        <div className="bg-white rounded-lg border p-4 mt-3 dark:bg-card-dark dark:border-dark">
          <div className="flex-align-center gap-x-2">
            <img
              src="/images/avatar.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="font-semibold">Wabweni Brian</h1>
              <p>Uganda</p>
              <div className="flex-align-center gap-x-3 mt-3">
                {Array.apply(null, { length: 5 }).map((_, i) => (
                  <div key={i} className="text-secondaryYellow">
                    {i < 4 ? <FaStar /> : <FaStarHalfAlt />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              temporibus molestiae at cum quia corporis numquam ea, aperiam,
              laudantium, ex natus. Soluta deserunt minus, ut odit at corrupti
              illum et!
            </p>
          </div>
        </div>
      ))}
      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">view more</button>
      </div>
    </div>
  );
};

export default Reviews;
