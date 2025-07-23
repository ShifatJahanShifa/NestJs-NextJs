import React from 'react'
import axios from 'axios'
import Link from 'next/link'


async function getTickets() {
    // imitate delay
    await new Promise(res => setTimeout(res, 3000))
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // sec
        }
    })
    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()
    return (
        <div>
            <h2>All Tickets</h2>
            {tickets && (
                tickets.map((ticket: any) => (
                    <div key={ticket.id} className='p-2 border mb-5 border-slate-300 shadow-md w-10/12 hover:cursor-pointer hover:shadow-xl'>
                        <Link href={`tickets/${ticket.id}`}>
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0, 200)} ...</p>
                            <p>{ticket.priority}</p>
                        </Link>
                    </div>
                ))
            )}
            {tickets.length === 0 && (
                <p className='text-center'>No tickets</p>
            )}
        </div>
    )
}
