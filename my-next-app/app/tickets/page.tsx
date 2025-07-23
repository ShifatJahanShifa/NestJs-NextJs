import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import CreateTicketButton from "./CreateTicketButton";

export default function Tickets() {

    return (
        <main>
            <nav className="flex flex-row">
                <div className="my-5">
                    <h2>Tickets</h2>
                    <div className="flex flex-row justify-between gap-100 items-center">
                        <p>All open tickets ...</p>
                        <CreateTicketButton />
                    </div>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}