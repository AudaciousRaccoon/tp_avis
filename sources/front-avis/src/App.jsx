import AvisEdit from './AvisEdit'
import Avis from './Avis'

function App() {
  return (
    <section className='bg-blue-800 text-white min-h-screen md:grid md:grid-cols-2 gap-4'>
      <AvisEdit />
      <Avis />
    </section>
  )
}

export default App
