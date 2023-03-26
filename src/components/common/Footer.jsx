/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiStore } from "../../features/uiSlice";

const Footer = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/">
              <img
                src={mode === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="logo"
                className="w-28"
              />
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Travel Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#"> Flight Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Car Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Five-star Hotels</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travelling</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Account</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Legal</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">About TripGuide</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Information</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travel Guide</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-sm">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="flex-align-center justify-center my-3">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none rounded-lg dark:bg-card-dark"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary -ml-2">subscribe</button>
            </div>
            <div className="flex-center-center gap-5 my-6">
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center  text-muted mt-3 py-2 border-t dark:border-dark">
        <p>
          Created By <span className="text-primary">Wabweni Brian</span> | All
          Rights Reserved. &copy;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
