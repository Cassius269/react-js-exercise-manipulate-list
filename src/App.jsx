import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/styles/App.scss';
import PhotoGalery from './components/PhotoGalery.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
          <h1>Bienvenu(e)</h1>
          <PhotoGalery />
      </main>
      <Footer />    
    </>
  )
}

export default App
