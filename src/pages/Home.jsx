import React from "react";
import Banner from "../components/common/Banner";
import NavFilters from "../components/common/NavFilters";
import HomeBanner from "../banners/banner.jpg";
import {
  BestPlaces,
  Explore,
  FeaturedDestinations,
  TopTours,
  TravelPassion,
  TrendingCities,
} from "../components/hotels";

const Home = () => {
  return (
    <div>
      <Banner
        banner={HomeBanner}
        title="book with us and enjoy your journey!"
      />
      <NavFilters url="/hotels/search" />
      <div className="mt-5 px-[3%] md:px-[6%]">
        <BestPlaces />
        <FeaturedDestinations />
        <TopTours />
        <Explore />
        <TrendingCities />
        <TravelPassion />
      </div>
    </div>
  );
};

export default Home;
