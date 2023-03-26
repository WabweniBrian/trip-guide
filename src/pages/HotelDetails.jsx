import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  AddReview,
  Amenities,
  Description,
  Features,
  HotelFeatures,
  PriceDetails,
  Reviews,
  RoomPrice,
  RoomSelections,
  Trending,
} from "../components/hotel-details";

const HotelDetails = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold capitalize">
        switzerland hotels and places to stay
      </h1>
      <div className="mt-4 flex-align-center gap-x-3">
        <div className="flex-align-center gap-x-2">
          <FaStar className="text-secondaryYellow" />
          <p>
            4.8
            <span className="opacity-70">(183 reviews)</span>
          </p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiMap />
          <p>Zurich town, Switzerland</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap rounded-xl gap-4 overflow-hidden">
        <div className="group overflow-hidden flex-1 basis-[30rem]">
          <img
            src="/images/place (31).jpg"
            alt=""
            className="group-hover:scale-125 transition-a "
          />
        </div>
        <div className="flex-1 basis-[16rem]">
          <div className="group overflow-hidden h-[150px]">
            <img
              src="/images/place (32).jpg"
              alt=""
              className="group-hover:scale-125 transition-a"
            />
          </div>
          <div className="mt-3 group overflow-hidden h-[150px]">
            <img
              src="/images/place (33).jpg"
              alt=""
              className="group-hover:scale-125 transition-a"
            />
          </div>
          <div className="mt-3 group overflow-hidden h-[150px]">
            <img
              src="/images/place (34).jpg"
              alt=""
              className="group-hover:scale-125 transition-a"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex-align-center gap-2 sm:gap-3 flex-col sm:flex-row">
        <div className="flex-align-center gap-x-2 sm:gap-x-3">
          <span className="text-sm text-green-500 bg-green-500/20 px-2 rounded">
            5.0
          </span>
          <span className="text-sm text-secondaryYellow bg-secondaryYellow/20 px-2 rounded">
            Perfect
          </span>
          <span className="text-sm text-primary bg-primary/20 px-2 rounded">
            Hotels
          </span>
          <span className="text-sm text-secondaryRed bg-secondaryRed/20 px-2 rounded">
            Building
          </span>
          <span className="text-sm text-orange-500 bg-orange-500/20 px-2 rounded">
            Top value
          </span>
        </div>
        <div className="flex-align-center gap-x-3">
          {Array.apply(null, { length: 5 }).map((_, i) => (
            <div key={i} className="text-secondaryYellow">
              {i < 4 ? <FaStar /> : <FaStarHalfAlt />}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold capitalize mt-4">
            exclusive room in house
          </h1>
          <p className="mt-2">Zurich, switzerland</p>
          {/* Tab Component */}
          <div className="pt-10">
            <TabWrapper>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Features</Tab>
                <Tab>Room & Price</Tab>
                <Tab>Review</Tab>
              </TabList>
              <TabPanel>
                <Description />
              </TabPanel>
              <TabPanel>
                <Features />
              </TabPanel>
              <TabPanel>
                <RoomPrice />
              </TabPanel>
              <TabPanel>
                <Reviews />
              </TabPanel>
            </TabWrapper>
          </div>

          {/* ------------------ */}

          <HotelFeatures />
          <Amenities />

          <button className="btn btn-primary mt-5">more details</button>
        </div>
        <div className="lg:col-span-1">
          <PriceDetails />
        </div>
      </div>

      <RoomSelections />
      <AddReview />
      <Trending />
    </div>
  );
};

export default HotelDetails;
