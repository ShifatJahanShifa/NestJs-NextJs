"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function CreateTicketButton() {
    const router = useRouter()  
    return (
        <button className="p-2 border border-slate-200 rounded bg-green-400 hover:bg-green-600 hover:cursor-pointer"
        onClick={(e) => { router.push('/tickets/create')}}
        >
            create ticket
        </button>
    )
}
