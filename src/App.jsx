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
          {/* Utilisation du composant Photogalery avec le filtre par défaut des tags des images datant avant décembre 2025*/}
          <PhotoGalery filterTag="tous" filterDate='2025-12'/>
      </main>
      <Footer />    
    </>
  )
}

export default App
