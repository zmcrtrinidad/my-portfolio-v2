import React, { useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";


export default function Sidebar() {
  const router = useRouter();
  useEffect(() => {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  });
  }, [])
  return (

  <aside className="fixed z-10 overflow-hidden ">
       <div className="fixed flex justify-end overflow-hidden lg:hidden">
        <button className="outline-none mobile-nav-toggle mobile-menu-button">
        <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
      <div className="hidden w-auto h-screen p-3 bg-gray-200 lg:bg-transparent lg:items-center lg:flex lg:justify-start lg:p-5 mobile-menu"    >
        <div className="h-full space-x-1 navbar nav-menu">
          <ul className="flex flex-col justify-center h-screen overflow-y-auto w-52 lg:w-auto " >
            <li>
              <Link href="#home" >
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link  href="#about">
              <i className="fa-solid fa-user-astronaut"></i>
                <span>About</span>
              </Link>
              
            </li>
            <li>
         
              <Link  href="#works" >
              <i className="fa-solid fa-book-open"></i>
                <span>Works</span>
              </Link>
            </li>
            <li>
              <Link  href="#experience">
              <i className="fa-solid fa-folder-tree"></i>
                <span>Experience</span>
              </Link>
              
            </li>
            <li>
             
              <Link  href="#contact">
              <i className="fa-solid fa-address-card"></i>
                <span>Contact</span></Link>
            </li>
          </ul>
        </div>
      </div>
     
    </aside>

   
  )
}