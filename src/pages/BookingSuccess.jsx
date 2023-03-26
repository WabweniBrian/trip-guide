import { BiArrowBack, BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <div className="min-h-screen flex-center-center">
      <div className="rounded-lg p-4 bg-white border dark:bg-card-dark dark:border-dark text-center max-w-[600px] w-[95%]">
        <div className="icon-box !w-16 !h-16 !bg-secondaryBlue mx-auto text-white">
          <BiCheck className="text-6xl" />
        </div>
        <h1 className="text-4xl font-bold mt-3">
          Thank you!! You've successfully booked your room
        </h1>
        <p>
          Your room has been successfully reserved, you can find all information
          about it from your{" "}
          <Link
            to="/bookings"
            className="!opacity-100 text-secondaryBlue hover:underline"
          >
            bookings
          </Link>{" "}
          section.
        </p>
        <Link
          to="/"
          className="!opacity-100 mt-3 flex-center-center gap-3 text-secondaryBlue hover:underline"
        >
          <BiArrowBack />
          <p>Go back home</p>
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
