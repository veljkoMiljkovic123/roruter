
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  let pathname = window.location.pathname.slice(1)
  function checkCurrentPage(){
    
  if(pathname === 'products'){
    return <ProductsPage />
  }else if(pathname === 'about'){
    return <AboutPage />
  }else if(pathname === 'contact'){
    return <ContactPage />
  }
  }

  return  <div>
    <NavbarComponent />

    {checkCurrentPage()}
    </div>
  
}

export default App
