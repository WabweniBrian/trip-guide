import { Cancelled, Total, Upcoming } from "../components/bookings";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Bookings = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      {/* Booking Tabs */}
      <div className="pt-8">
        <TabWrapper>
          <TabList>
            <Tab>Total Bookings (1)</Tab>
            <Tab>Upcoming (1)</Tab>
            <Tab>Cancelled (1)</Tab>
          </TabList>
          <TabPanel>
            <Total />
          </TabPanel>
          <TabPanel>
            <Upcoming />
          </TabPanel>
          <TabPanel>
            <Cancelled />
          </TabPanel>
        </TabWrapper>
      </div>
    </div>
  );
};

export default Bookings;
