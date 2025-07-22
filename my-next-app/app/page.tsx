import Link from "next/link";

// this is my home component for home page
export default function Home() {
  return (
    <main>
      <h2 className="font-bold">Dashboard</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="p-2 border border-slate-200 rounded bg-green-400 hover:bg-green-600 hover:cursor-pointer">View Tickets</button>
        </Link>
      </div>

      <h2 className="font-bold">Company Updates</h2>

      <div className="flex flex-col gap-5 mt-5">
        <div className="p-2 border border-slate-300 shadow-md w-10/12 hover:cursor-pointer hover:shadow-xl">
          <h3>New member of the web dev team...</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
        </div>
        <div className="p-2 border border-slate-300 shadow-md w-10/12 hover:cursor-pointer hover:shadow-xl">
          <h3>New website live!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
        </div>
      </div>
    </main>
  );
}
