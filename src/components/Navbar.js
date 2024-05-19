// import React from "react";
// import logo from "../assets/greenhaat.png";
// import SearchBar from "./SearchBar/SearchBar";

// const Navbar = ({ onSearch }) => {
//   return (
//     <header className="border-b border-gray-300 bg-white font-sans tracking-wide relative z-50">
//       <section className="flex flex-wrap items-center justify-between gap-4 py-3 px-10 min-h-[75px] bg-gray-50">
//         <a href="javascript:void(0)" className="flex-shrink-0">
//           <img src={logo} alt="logo" className="w-[100px]" />
//         </a>

//         <div className="flex-grow">
//           <SearchBar onSearch={onSearch}/>
//         </div>

//         <div className="lg:absolute lg:right-10 flex items-center">
//           <button className="px-4 py-2 text-[15px] rounded font-bold text-green-400 hover:text-green-500 border-2 border-green-300 bg-transparent">
//             BULK ORDER
//           </button>
//         </div>
//       </section>

//       <div className="flex flex-wrap items-start gap-4 px-10 py-4 relative">
//         <div
//           id="collapseMenu"
//           className="w-full lg:flex lg:justify-center gap-x-8 max-lg:hidden max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
//         >
//           <button
//             id="toggleClose"
//             className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 fill-black"
//               viewBox="0 0 320.591 320.591"
//             >
//               <path
//                 d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                 data-original="#000000"
//               ></path>
//               <path
//                 d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                 data-original="#000000"
//               ></path>
//             </svg>
//           </button>

//           <ul className="lg:flex lg:justify-center gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
//             <li className="mb-6 hidden max-lg:block">
//               <a href="javascript:void(0)">
//                 <img
//                   src="https://readymadeui.com/readymadeui.svg"
//                   alt="logo"
//                   className="w-36"
//                 />
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 BRANDS
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 SEEDS
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 CROP PROTECTION
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 CROP NUTRITION
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 PASTE & DISEASE
//               </a>
//             </li>
//             <li className="max-lg:border-b border-gray-200 max-lg:py-3">
//               <a
//                 href="javascript:void(0)"
//                 className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
//               >
//                 STORE
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="flex ml-auto lg:hidden">
//           <button id="toggleOpen">
//             <svg
//               className="w-7 h-7 fill-pink-500"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import logo from "../assets/greenhaat.png";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = ({ onSearch }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const menuItems = {
    BRANDS: {
      SEEDS: ["Brand Seed 1", "Brand Seed 2", "Brand Seed 3","4","5","6","7"],
      "CROP PROTECTION": ["Brand Protection 1", "Brand Protection 2"],
      "CROP NUTRITION": ["Brand Nutrition 1", "Brand Nutrition 2"],
    },
    SEEDS: ["Item 4", "Item 5", "Item 6"],
    "CROP PROTECTION": ["Item 7", "Item 8", "Item 9"],
    "CROP NUTRITION": ["Item 10", "Item 11", "Item 12"],
    "PASTE & DISEASE": ["Item 13", "Item 14", "Item 15"],
    STORE: ["Item 16", "Item 17", "Item 18"],
  };

  return (
    <header className="border-b border-gray-300 bg-white font-sans tracking-wide relative z-50">
      <section className="flex flex-wrap items-center justify-between gap-4 py-3 px-10 min-h-[75px] bg-gray-50">
        <a href="javascript:void(0)" className="flex-shrink-0">
          <img src={logo} alt="logo" className="w-[100px]" />
        </a>

        <div className="flex-grow">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="lg:absolute lg:right-10 flex items-center">
          <button className="px-4 py-2 text-[15px] rounded font-bold text-green-400 hover:text-green-500 border-2 border-green-300 bg-transparent">
            BULK ORDER
          </button>
        </div>
      </section>

      <div className="flex flex-wrap items-start gap-4 px-10 py-4 relative">
        <div
          id="collapseMenu"
          className="w-full lg:flex lg:justify-center gap-x-8 max-lg:hidden max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:justify-center gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            {Object.keys(menuItems).map((menu) => (
              <li
                key={menu}
                className="max-lg:border-b border-gray-200 max-lg:py-3 relative nav-item"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="javascript:void(0)"
                  className="hover:text-gray-500 font-bold text-gray-400 text-[15px] block"
                >
                  {menu}
                </a>
                {dropdownVisible === menu && (
                  <ul className="dropdown-menu">
                    {Array.isArray(menuItems[menu])
                      ? menuItems[menu].map((item, index) => (
                          <li key={index} className="dropdown-item">
                            {item}
                          </li>
                        ))
                      : Object.keys(menuItems[menu]).map((subMenu) => (
                          <li key={subMenu} className="relative">
                            <a
                              href="javascript:void(0)"
                              className="block font-bold text-gray-400 hover:text-gray-500 text-[15px] px-2 py-1"
                            >
                              {subMenu}
                            </a>
                            {dropdownVisible === menu && (
                              <ul className="dropdown-submenu">
                                {menuItems[menu][subMenu].map((subItem, index) => (
                                  <li key={index} className="dropdown-item">
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                  </ul>
                )}
              </li>
            ))}
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
