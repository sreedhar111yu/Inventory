import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const[isDropdownTwo,setDropdownTwo]=useState(false);
    const[isDropdownThree,setDropdownThree]=useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const DropdownTwo = () => {
    setDropdownTwo(!isDropdownTwo);
  };
  const DropdownThree = () => {
    setDropdownThree(!isDropdownThree);
  };
  return (
    <>
     <div className='w-full h- flex text-white '>
    <div className='h-[calc(102vh-1rem)] w-full max-w-[15rem] bg-black p-4 shadow-xl shadow-blue-gray-900/5 '>
    <Link to='/' className='flex space-x-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

     <h1 className='font-bold text-2xl font-madimi-one  '>
Inventory</h1></Link> 
<hr />


<div className='mt-11 px-2 hover:bg-blue-400 rounded-lg py-2 flex items-center'>
  <Link className='flex space-x-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    <h1 className=''>Home</h1>
  </Link>
</div>

{/* Dropdown Content INVENTORY */}

<div className='mt-5 px-2 hover:bg-blue-400 rounded-lg py-2 flex items-center'>
  <div className='flex space-x-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

<div className="relative ">
      <button
        type="button"
        onClick={toggleDropdown}
        className=""
        id="dropdown-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Inventory
      </button>

      {/* Dropdown Content INVENTORY */}
      {isDropdownOpen && (
        <div
          className=" mt-2  w-40 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
</div>



      {/* Dropdown SALE */}

<div className='mt-5 px-2 hover:bg-blue-400 rounded-lg py-2 flex items-center'>
  <div className='flex space-x-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


<div className="relative ">
      <button
        type="button"
        onClick={DropdownTwo}
        className=""
        id="dropdown-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Sales
      </button>

      {/* Dropdown Content */}
      {isDropdownTwo && (
        <div
          className=" mt-2  w-40 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
</div>



  {/* Dropdown PR */}

  <div className='mt-5 px-2 hover:bg-blue-400 rounded-lg py-2 flex items-center'>
  <div className='flex space-x-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>



<div className="relative ">
      <button
        type="button"
        onClick={DropdownThree}
        className=""
        id="dropdown-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Purchases
      </button>

      {/* Dropdown Content */}
      {isDropdownThree && (
        <div
          className=" mt-2  w-40 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:text-gray-900"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

{/* Reports */}
<div className='mt-5 px-2 hover:bg-blue-400 rounded-lg py-2 flex items-center'>
  <Link className='flex space-x-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

    <h1 className=''>Reports</h1>
  </Link>
</div>





    
    </div> 
    </div>
   </>
  )
}

export default Sidebar