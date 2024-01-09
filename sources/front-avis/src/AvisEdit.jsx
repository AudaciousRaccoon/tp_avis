import { useState } from "react"

function AvisEdit() {
  const [texte, setTexte] = useState("");
  const [email, setEmail] = useState("");

  const handleTexteChange = (event) => {
    setTexte(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    const rawResponse = await fetch('/api/avis', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, texte})
    });
    const content = await rawResponse.json();
    setEmail("");
    setTexte("");
    console.log(content);
  }
  return (
    <section className='flex min-h-screen items-center'>
      <div className="bg-slate-300 rounded-md w-full mx-10 p-4 text-xl text-blue-900">
        <form onSubmit={handleSubmit}>
          <div className="form flex flex-col mb-3">
            <label htmlFor="avis">Votre avis</label>
            <textarea className="p-2" name="" id="avis" cols="30" rows="6"
              value={texte} onChange={handleTexteChange}
            ></textarea>
          </div>
          <div className="form flex flex-col mb-3">
            <label htmlFor="">Votre email</label>
            <input type="email" className="p-2" name="" id=""
             value={email} onChange={handleEmailChange}
            ></input>
          </div>
          <div className="form flex flex-col">
            <button type="submit" className="bg-blue-900 text-white font-light uppercase py-2"> Transmettre </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AvisEdit
