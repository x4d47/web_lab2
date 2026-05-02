import { useState, useEffect } from 'react';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Comments from "./components/Comments.jsx"
import Contacts from './components/Contacts.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    const timer = setTimeout(() => setShowModal(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <ContactForm closeForm={closeForm} />}
      <div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex justify-center py-10 px-5 font-sans text-gray-800 dark:text-gray-200">
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] bg-white dark:bg-gray-800 dark:shadow-none shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
          
          <aside className="w-full md:w-1/3 bg-purple-200 dark:bg-gray-700 p-8 md:p-12">
            <Contacts />
            <Skills />
            <Education />
          </aside>

          <main className="w-full md:w-2/3 p-8 md:p-12 flex flex-col">
            <Header />
            <About />
            <Comments />
            <div className="mt-auto">
              <Footer />
            </div>
          </main>

        </div>
      </div>
    </>
  )
}

export default App