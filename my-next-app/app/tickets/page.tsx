import TicketList from "./TicketList";

export default function Tickets() {
    return (
        <main>
            <nav>
                <div className="my-5">
                    <h2>Tickets</h2>
                    <p>All open tickets ...</p>
                </div>
            </nav>

            <TicketList/>
        </main>
    )
}