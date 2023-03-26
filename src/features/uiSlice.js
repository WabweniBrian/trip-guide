import { createSlice } from "@reduxjs/toolkit";

const mode =
  JSON.parse(localStorage.getItem("TripGuide-theme-mode")) || "light";

const initialState = {
  isDropdownOpen: false,
  isNotificationsOpen: false,
  isSidebarOpen: false,
  isFilterMenuOpen: false,
  mode: mode,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    openNotifications: (state) => {
      state.isNotificationsOpen = true;
    },
    closeNotifications: (state) => {
      state.isNotificationsOpen = false;
    },
    toggleNotifications: (state) => {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
    openFilterMenu: (state) => {
      state.isFilterMenuOpen = true;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuOpen = false;
    },
    turnOnDarkMode: (state) => {
      state.mode = "dark";
    },
    turnOnLightMode: (state) => {
      state.mode = "light";
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openNotifications,
  closeNotifications,
  toggleNotifications,
  openFilterMenu,
  closeFilterMenu,
  turnOnDarkMode,
  turnOnLightMode,
} = uiSlice.actions;
