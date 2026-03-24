import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center py-10 px-5 font-sans text-gray-800">
      <div className="flex flex-col md:flex-row w-full max-w-[1000px] bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
        
        <aside className="w-full md:w-1/3 bg-purple-200 p-8 md:p-12">
          <Contacts />
          <Skills />
          <Education />
        </aside>

        <main className="w-full md:w-2/3 p-8 md:p-12 flex flex-col">
          <Header />
          <About />
          <div className="mt-auto">
            <Footer />
          </div>
        </main>

      </div>
    </div>
  )
}

export default App