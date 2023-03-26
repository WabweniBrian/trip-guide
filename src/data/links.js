import { BiBattery, BiCog, BiCreditCard, BiMoney } from "react-icons/bi";
import { FiGrid, FiUsers } from "react-icons/fi";

export const links = [
  {
    id: 1,
    title: "Dashboad",
    icon: <FiGrid />,
    url: "/",
  },
  {
    id: 2,
    title: "All Activity",
    icon: <BiBattery />,
    url: "/activity",
  },
  {
    id: 3,
    title: "Debit Card",
    icon: <BiCreditCard />,
    url: "/debit-card",
  },
  {
    id: 4,
    title: "Money convert",
    icon: <BiMoney />,
    url: "/money-convert",
  },
  {
    id: 5,
    title: "Recipients",
    icon: <FiUsers />,
    url: "/recipients",
  },
  {
    id: 6,
    title: "Settings",
    icon: <BiCog />,
    url: "/settings",
  },
];
