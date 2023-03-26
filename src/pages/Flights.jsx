import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import FlightBanner from "../banners/flights.jpg";
import { BestWay, Deals, FAQs } from "../components/flights";

const Flights = () => {
  return (
    <div>
      <Banner banner={FlightBanner} title="Your best and comfortable flight" />
      <NavFilters url="/flights/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default Flights;
