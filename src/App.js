import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Social from './components/Social';
import TitleText from './components/TitleText';

import Top from './components/Top';

function App() {
  return (
    <div >
      <Header />
      <div className="app px-8 sm:px-10 md:px-20 pb-2 " >
        <Top />
        <hr className='divider my-10' />
        <section className='sm:grid grid-cols-2 gap-10'>
          <TitleText />
          <Social />
        </section>
        <hr className='divider' />
        <section className='my-16'>
          <Skills />
          <div className='flex items-center justify-center m-4'>
          <div data-tip="This links to my email" class="tooltip tooltip-accent">
            <a class="link link-accent text-center" target="_blank" rel="noreferrer" href='mailto:brentbcarey@gmail.com'>Reach Me Here!</a>
            </div>
          </div>
        </section>
        <hr className='divider my-8' />
        <section className='w-full flex justify-center items-center'>
        <Projects />
        </section>
        <hr className='divider my-8' />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
