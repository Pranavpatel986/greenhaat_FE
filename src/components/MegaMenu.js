import React from 'react'

const MegaMenu = () => {
  return (
    <div className='flex flex-wrap items-center justify-between px-10 py-3 relative lg:gap-y-4 max-sm:gap-x-4 gap-y-6'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-[156px]' />
      </a>
      <div className='flex items-center max-lg:ml-auto lg:order-1'>
        <div
          className="bg-gray-50 outline-[#333] focus-within:outline flex px-4 rounded-sm h-10 max-xl:hidden max-lg:flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-400 mr-3">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
          <input type='email' placeholder='Search...' className="w-full outline-none bg-transparent text-black text-sm" />
        </div>
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu" className='lg:!flex max-lg:hidden max-lg:w-full max-lg:space-y-3 max-lg:my-4'>
        <li className='max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-pink-500 text-sm block'>Home</a></li>
        <li className='group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2 relative'>
          <a href='javascript:void(0)' className='hover:text-pink-500 text-pink-500 text-sm block'>Shop
          </a>
          <div className="absolute shadow-lg bg-white px-8 py-4 min-h-[360px] lg:top-10 max-lg:top-8 -left-6 z-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-16 w-max">
              <ul className='space-y-4'>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-pink-500 font-semibold text-sm block'>Indian & Fusion Wear</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Kurtas & Suits</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Kurtis, Tunics & Tops</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Sarees</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Ethnic Wear</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Dress Materials</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Lehenga Cholis</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Dupattas & Shawls</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Jackets</a></li>
              </ul>
              <ul className='space-y-4'>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-pink-500 font-semibold text-sm block'>Western Wear</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Dresses</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Tops</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Tshirts</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Jeans</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Trousers & Capris</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Shorts & Skirts</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Co-ords</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Playsuits</a></li>
              </ul>
              <ul className='space-y-4'>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-pink-500  font-semibold text-sm block'>Maternity</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Flats</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Casual Shoes</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Heels</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Boots</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Sports Shoes & Floaters</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Clothing</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Footwear</a></li>
              </ul>
              <ul className='space-y-4'>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-pink-500 font-semibold text-sm block'>Gadgets</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Smart Wearables</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Fitness Gadgets</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Headphones</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Speakers</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Smart Phone</a></li>
                <li className='rounded'><a href='javascript:void(0)'
                    className='hover:text-pink-500 text-black text-sm block'>Watch</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className='group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2'>
          <a href='javascript:void(0)' className='hover:text-pink-500 text-black text-sm block'>Blog
          </a>
        </li>
        <li className='max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-pink-500 text-black text-sm block'>Team</a></li>
        <li className='max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-pink-500 text-black text-sm block'>About</a></li>
        <li className='max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-pink-500 text-black text-sm block'>Contact</a></li>
        <li className='max-lg:border-b border-gray-400 max-lg:py-2 lg:px-8'><a href='javascript:void(0)'
            className='hover:text-pink-500 text-black text-sm block'>Source</a></li>
      </ul>
    </div>
  )
}

export default MegaMenu