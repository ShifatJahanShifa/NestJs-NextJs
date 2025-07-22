import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import dp from './dp.jpg'

export default function Navbar() {
  return (
        <nav className='flex flex-row items-center mb-5'>
            <Image src={dp} alt='my dp' className='h-10 w-10 rounded-full' quality={100} placeholder='blur'/>
            <h1 className='font-bold flex-2/5'>DoJo HelpDesk</h1>
            {/* link component can intercept rquest to the server and fetch the page/prefetch the page so things got speed up */}
            <div className='flex-3/5 flex flex-row gap-3'>
                <Link href="/">Dashboard</Link>
                <Link href="/tickets">Tickets</Link>
            </div>
        </nav>
  )
}
