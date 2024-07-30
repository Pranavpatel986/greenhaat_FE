import React, { useState } from "react";
import logo from "../assets/greenhaat.png";
// import SearchBar from "./SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.png"

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const handleBulkOrderClick = () => {
    navigate("/orderQuery");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const menuItems = {
    BRANDS: {
      SEEDS: ["Brand Seed 1", "Brand Seed 2", "Brand Seed 3", "4", "5", "6", "7","Brand Seed 3", "4", "5", "6", "7","Brand Seed 3", "4", "5", "6", "7","Brand Seed 3", "4", "5", "6", "7","Brand Seed 3", "4", "5", "6", "7"],
      "CROP PROTECTION": ["Brand Protection 1", "Brand Protection 2"],
      "CROP NUTRITION": ["Brand Nutrition 1", "Brand Nutrition 2"],
    },
    SEEDS: {
      "HORTICULTURE CROPS": ["Brand Seed 1", "Brand Seed 2", "Brand Seed 3", "4", "5", "6", "7"],
      "FIELD CROPS": ["Brand Protection 1", "Brand Protection 2"],
      "SPECIAL CATEGORY": ["Brand Nutrition 1", "Brand Nutrition 2"],
    },
    "CROP PROTECTION": {
      "CHEMICAL PESTICIDES": ["Brand Seed 1", "Brand Seed 2", "Brand Seed 3", "4", "5", "6", "7"],
      "BIO/ORGANIC PESTICIDES": ["Brand Protection 1", "Brand Protection 2"],
      "TRAPS & LURES": ["Brand Nutrition 1", "Brand Nutrition 2"],
    },
    "CROP NUTRITION": {
      "FERTILIZERS": ["Brand Seed 1", "Brand Seed 2", "Brand Seed 3", "4", "5", "6", "7"],
      "GROWTH PROMOTERS": ["Brand Protection 1", "Brand Protection 2"],
      "PLANT GROWTH REGULATORS": ["Brand Nutrition 1", "Brand Nutrition 2"],
    },
    "PASTE & DISEASE": ["Item 13", "Item 14", "Item 15"]
  };

  return (
    <header className="border-b border-gray-300 bg-white  relative z-50">
      
      <div className="flex flex-wrap items-start gap-4 px-10 py-4 relative">
        <div className="w-full lg:flex gap-x-8 max-lg:hidden max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <ul className="lg:flex lg:justify-center gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {Object.keys(menuItems).map((menu) => (
              <li
                key={menu}
                className="max-lg:border-b border-gray-200 max-lg:py-3 relative nav-item flex flex-row"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
                >
                  {menu}
                </a>
                {dropdownVisible === menu && (
                  <ul className="dropdown-menu absolute bg-white shadow-lg border border-gray-200 border-r-4 mt-1 py-2 px-4 bg-gray-200 ">
                    <a href="#"
                  className="hover:text-green-800 font-bold text-green-800 text-[15px] block px-4 py-4">
                    {menu}
                    </a>
                    {Array.isArray(menuItems[menu])
                      ? menuItems[menu].map((item, index) => (
                          <li key={index} className="dropdown-item hover:text-gray-800">
                            {item}
                          </li>
                        ))
                      : Object.keys(menuItems[menu]).map((subMenu) => (
                          <li key={subMenu} className="relative group">
                            <a
                              href="#"
                              className="block font-bold text-gray-400 hover:text-gray-800 text-[15px] px-2 py-1"
                            >
                              {subMenu}
                            </a>
                            <div>
                            <ul className="dropdown-submenu absolute left-full top-0 hidden group-hover:flex flex-col shadow-lg border border-gray-200 py-2 px-4 w-screen bg-gray-100 overflow-y-auto">
                              {menuItems[menu][subMenu].map((subItem, index) => (
                                <li key={index} className="dropdown-item hover:text-gray-800">
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                            </div>
                          </li>
                        ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="max-lg:border-b border-gray-200 max-lg:py-3 relative nav-item">
              <Link to="/productList" className="hover:text-green-500 font-bold text-green-400 text-[15px] block">
                STORE
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-200 max-lg:py-3 relative nav-item">
              <Link to="/orderQuery" className="hover:text-green-500 font-bold text-green-400 text-[15px] block">
                Bulk Order Query
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex ml-auto lg:hidden">
          <button id="toggleOpen">
            <svg
              className="w-7 h-7 fill-pink-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
