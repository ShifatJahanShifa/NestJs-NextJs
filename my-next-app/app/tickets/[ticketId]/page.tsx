import { notFound } from 'next/navigation';
import React from 'react';

interface TicketDetailsProps {
  params: {
    ticketId: string;
  };
}

async function getTicket(ticketId: string) {
  await new Promise(res => setTimeout(res, 3000))
  
  const res = await fetch(`http://localhost:4000/tickets/${ticketId}`, {
        next: {
            revalidate: 60 // sec
        }
    })

    if(!res.ok) 
    {
      notFound()
    }

    return res.json()
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
  const ticketId = params.ticketId;
  const ticket = await getTicket(ticketId);

  return (
    <main>
      <nav>
        <h2> 
          Ticket Details
        </h2>
      </nav>
      <div>
        <h3>{ticket.title}</h3>
        <small>Created By: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <p>{ticket.priority}</p>
      </div>
    </main>
  )
}
