import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layouts({children}) {
  return (
    <div>
        <Sidebar/>
        {children}
        {/* <Footer/> */}
    </div>
  )
}
