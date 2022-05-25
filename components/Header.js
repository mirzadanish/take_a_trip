import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { SearchIcon, MenuIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button';

function Header({ placeholder }) {

  const signUpPage = ()=>{
    router.push('/SignupPage');
  }

  const logInPage = ()=>{
    router.push('/Loginpage');
  }

  const [search, setSearch] = useState("");
  const [guestAmount, setGuestAmount] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const clearInput = () => {
    setSearch("");
    setGuestAmount(1);
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const searchPlaces = () => {
    router.push({
      pathname: "/Property",
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestAmount,
      }
    })
  }

  return (<div>
    <header className="sticky top-0 z-50 grid grid-cols-3 font-Poppins bg-[#b5838d] shadow-md p-4 md:px-10">

      {/* Left section */}
      <div onClick={() => router.push("/")} className="relative flex items-center h-7 cursor-pointer my-auto">
        <Image src="/Logoo.png" priority="true" width={200} height={50} objectFit="contain" objectPosition="left" alt="logo image" />

      </div>


      {/* Middle section */}
      <div className="hidden lg:flex items-center whitespace-nowrap justify-center space-x-10 text-white font-[Poppins] text-sm font-bold w-100">
        <Link href="" className="cursor-pointer hover:border-b">Places to Stay</Link>
        <Link href="/AboutUs" className="cursor-pointer hover:border-b">About</Link>
        <Link href="" className="cursor-pointer hover:border-b">Help</Link>
        <Link href="/Become_a_Host/Step1" className="cursor-pointer hover:border-b">Become a host</Link>
      </div>

      {/* Right section */}
      <div className="flex outline-none items-center justify-end space-x-2">
        <div className="flex rounded-full space-x-2 ml-20 md:shadow-sm bg-white w-50">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full border-0 flex-grow pl-5 bg-transparent text-sm font-[Poppins] text-secondary placeholder-gray-400 outline-none"
            type="text"
            placeholder={placeholder || "Search Places"} />
          <SearchIcon className="hidden md:inline-flex h-8 rounded-full p-2 cursor-pointer md:mx-2 bg-transparent text-secondary " />
        </div>
        <div className="flex rounded-full items-center space-x-2 h-8 md:shadow-sm bg-white">
          <Menu>
            <MenuButton>
            <MenuIcon className="md:inline-flex h-6 bg-white cursor-pointer text-secondary md:mx-2 bg-transparent" />
            </MenuButton>
            <MenuList className="sticky mt-3 rounded-md top-0 space-y-3 cursor-pointer bg-white pt-2 pb-2 z-50 outline-none">
              <MenuItem className="hover:font-semibold pl-3 pb-2 font-[Poppins] pt-2 pr-20 text-secondary hover:bg-primary hover:text-white active:scale-90 transition duration-150" onSelect={signUpPage}>Sign Up</MenuItem>
              <MenuItem className="hover:font-semibold pl-3 pb-2 font-[Poppins] pt-2 pr-20 text-secondary hover:bg-primary hover:text-white active:scale-90 transition duration-150" onSelect={logInPage}>Log In</MenuItem>
              <MenuItem className="hover:font-semibold pl-3 pb-2 font-[Poppins] pt-2 pr-20 text-secondary hover:bg-primary hover:text-white active:scale-90 transition duration-150" onSelect={()=>alert("Host Property")}>Host property</MenuItem>
              <MenuItem className="hover:font-semibold pl-3 pb-2 font-[Poppins] pt-2 pr-20 text-secondary hover:bg-primary hover:text-white active:scale-90 transition duration-150" onSelect={()=>alert("Help")}>Help</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header >
    {search &&
      <div className=" mt-5 mr-5 flex flex-col col-span-3 items-end">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#B5838D"]}
          onChange={handleSelect}
        />
        <div className="flex items-center mt-1 space-x-2 border-b mb-4">
          <h2 className="text-secondary flex-grow font-semibold font-[Poppins] text-xl">
            Number of Guests
          </h2>
          <UsersIcon className="h-5 text-secondary" />
          <input
            value={guestAmount}
            onChange={(e) => setGuestAmount(e.target.value)}
            min={1}
            className="w-12 pl-2 outline-none border-0 text-primary"
            type="number" />
        </div>
        <div className="flex space-x-40 text-center mb-3">
          <button onClick={clearInput} className="flex-grow font-semibold hover:underline hover:font-bold text-primary">
            Cancel
          </button>
          <button onClick={searchPlaces} className="flex-grow font-semibold hover:underline hover:font-bold text-primary">
            Search
          </button>
        </div>
      </div>
    }

  </div>
  )
}

export default Header;