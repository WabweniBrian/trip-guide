import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { motion } from "framer-motion";

const Notifications = () => {
  const { isNotificationsOpen } = useSelector(uiStore);
  return (
    <>
      {isNotificationsOpen && (
        <motion.div
          className="dropdown absolute -right-40 z-20 top-full mt-3 p-2 !rounded-xl w-[320px] card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          {/*---------------------------------------- Notifications List------------------------------------- */}
          {Array.apply(null, { length: 5 }).map((_, i) => (
            <div
              className="flex space-x-3 p-2 border-b dark:border-dark  sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
              key={i}
            >
              <div>
                <img
                  src="/images/avatar-2.png"
                  alt=""
                  className="w-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Raven Kent</h1>
                <p className="text-sm">
                  you just added another debit card
                  <span className="text-primary"> Check it out</span>
                </p>
                <span className="text-sm text-slate-500">12 hrs ago</span>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Notifications;
