import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


export default function Sidebar() {
const router = useRouter();
return (
<aside>

  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto h-screen flex items-center py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    <nav id="navbar" class="navbar nav-menu">
      <ul className="space-y-2">
        <li>
          <Link href="/"><a className={router.pathname=="/" ? "nav-link scrollto active" : " nav-link scrollto" }> <i
              class="bx bx-home"></i><span>Home</span></a></Link>
        </li>
        <li>
          <Link href="/about"><a className={router.pathname=="/about" ? "nav-link scrollto active"
            : " nav-link scrollto" }><i class="bx bx-user"></i><span>About</span></a></Link>
        </li>
        <li>
          <Link href="/projects"><a className={router.pathname=="/projects" ? "nav-link scrollto active"
            : " nav-link scrollto" }><i class="bx bx-book-content"></i> <span>Works</span></a></Link>
        </li>
        <li>
          <Link href="/contact"><a className={router.pathname=="/contact" ? "nav-link scrollto active"
            : " nav-link scrollto" }><i class="bx bx-envelope"></i> <span>Contact</span></a></Link>
        </li>
      </ul>
    </nav>
    </div>
  </aside>

  {/* <i class="bx bx-list-ul mobile-nav-toggle d-xl-none" style={{color:'white'}}></i>
  <header id="header" class="d-flex flex-column justify-content-center">
    
  </header> */}
</aside>
)
}