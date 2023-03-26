import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import CarBanner from "../banners/car.jpg";
import BestWay from "../components/cars/BestWay";
import { Brands, Deals, FAQs, PopularDestinations } from "../components/cars";

const CarRental = () => {
  return (
    <div>
      <Banner banner={CarBanner} title="Find your best rental car" />
      <NavFilters url="/cars/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestWay />
        <PopularDestinations />
        <Brands />
        <Deals />
        <FAQs />
      </div>
    </div>
  );
};

export default CarRental;
