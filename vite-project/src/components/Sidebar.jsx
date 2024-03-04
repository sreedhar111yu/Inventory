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
     <div className='flex fixed border w-full'>
     <div className='flex w-1/6'>
    <div className='h-[calc(102vh-1rem)] w-full max-w-[rem] bg-black p-4 shadow-xl shadow-blue-gray-900/5 text-white '>
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
          <Link to="/items" className="block px-4 py-2 text-sm hover:text-gray-900" role="menuitem">
           Items
         </Link>

            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Price List
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Item Groups
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
              Customer
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Sales Orders
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Shipments
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
            >vendors
              
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Purchase Orders
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:text-blue-900"
              role="menuitem"
            >
              Bills
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

    {/* Navbar */}

  

    <div className='w-full    '>
        <div className='   bg-slate-200  w-full p-4 border flex  justify-between '>
        <div className='flex border w-1/4 bg-white rounded-lg items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8 font-bold">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>

  <h1 className='text-lg px-5'>
    <input type="text" placeholder='Search' className='focus:outline-none' />
  </h1>
</div>
     

     
<div className=' flex space-x-5 mt-1 '>
    <Link>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
    </Link>
     
   <Link> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg></Link>

     </div>
        </div> 

        
      </div>

   </div>


     


   </>
  )
}

export default Sidebar