import { useState } from "react";

function Avis() {
  const [data, setData] = useState([])
  const load = async(event) => {
    event.preventDefault();
    const rawResponse = await fetch('/api/avis', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const content = await rawResponse.json();
    console.log(content);
    setData(content);
  }
  return (
    <section className='flex flex-col min-h-screen p-4'>
      <h4 className="flex items-center justify-between text-3xl border-white border-b-4 w-full cursor-pointer" onClick={load}>
        <span>Avis reçus</span>
        <span className="text-6xl">&#10226;</span>      
      </h4>
      <div className="grid grid-cols-3 gap-3 py-3">
        {
          data.map((item, key) => (
            <article key={key} className="bg-gray-100 p-2 text-black rounded-md">
              <h3>{item.email}</h3>
              <div>{item.texte}</div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Avis
