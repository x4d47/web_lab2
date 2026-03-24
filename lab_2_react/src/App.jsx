import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='wrapper'>
      <aside className='sidebar'>
        <Contacts />
        <Skills />
        <Education />
      </aside>

      <main className="main-content">
        <Header />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App