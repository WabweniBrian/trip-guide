import React from "react";
import {
  BiBriefcaseAlt2,
  BiCreditCardAlt,
  BiLogOut,
  BiTagAlt,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiFileText } from "react-icons/fi";

const Dropdown = () => {
  const { isDropdownOpen } = useSelector(uiStore);

  return (
    <>
      {isDropdownOpen && (
        <motion.div
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-52 card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <Link
            to="/profile"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
          </Link>
          <Link
            to="/profile"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiUser className="text-muted" />
            <span className="text-muted">Manage Account</span>
          </Link>
          <Link
            to="/blog"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <FiFileText className="text-muted" />
            <span className="text-muted">Blog</span>
          </Link>
          <Link
            to="/bookings"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiBriefcaseAlt2 className="text-muted" />
            <span className="text-muted">Bookings</span>
          </Link>
          <Link
            to="/wallet"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiCreditCardAlt className="text-muted" />
            <span className="text-muted">My Wallet</span>
          </Link>
          <Link
            to="/rewards"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiTagAlt className="text-muted" />
            <span className="text-muted">My Rewards</span>
          </Link>
          <Link
            to="/login"
            className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiLogOut className="text-muted" />
            <span className="text-muted">Sign out</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
