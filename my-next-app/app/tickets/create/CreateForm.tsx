"use client"

import { useRouter } from "next/navigation"  // remember, from navigation
import { useState } from "react"


export default function CreateForm() {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true) 

        const ticket = {title, body, priority, user_email: "shifa@dojo.com"}

        const res = await fetch('http://localhost:4000/tickets', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201) 
        {
            router.refresh() // telling to refetch the data
            router.push('/tickets')
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="w-2/4 mx-auto flex flex-col text-center gap-3 mt-5 bg-pink-100 border border-pink-400 shadow-xl rounded-2xl">
            <div className="flex flex-row gap-3 p-5">
                <label>
                    <span>Title:</span>
                </label>
                <input
                required 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-full border border-slate-500"
                />
            </div>

            <div className="flex flex-row gap-3 p-5">
                <label>
                    <span>Body:</span>
                </label>
                <textarea
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className="w-full border border-slate-500 h-20"
                />
            </div>

            <div className="flex flex-row gap-3 p-5">

                <label>
                    <span>Priority:</span>
                </label>
                <select 
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                className="w-full border border-slate-500"
                >
                <option value="low" className="border border-slate-200 bg-pink-50">Low Priority</option>
                <option value="medium" className="border border-slate-200 bg-pink-50">Medium Priority</option>
                <option value="high" className="border border-slate-200 bg-pink-50">High Priority</option>
                </select>
            </div>
            <button 
                className="p-2 w-1/4 mx-auto mb-5 border border-slate-200 rounded bg-green-400 hover:bg-green-600 hover:cursor-pointer" 
                disabled={isLoading}

            >
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}