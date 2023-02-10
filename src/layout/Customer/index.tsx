import React from 'react'
import clsx from 'clsx'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Layout({className,children,...props}:React.ComponentPropsWithRef<"div">) {
  return (
   <div className='overflow-hidden'>
     <div className={clsx("Layout", className)} {...props}>
      <header className="">
        <Navbar/>
      </header>
      <main className="mt-[70px]">
        {children}
      </main>
      <Footer/>
    </div>
   </div>
  )
}

export default Layout