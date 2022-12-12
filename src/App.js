import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Editar from './pages/Editar';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Sobre' element={<Sobre></Sobre>}/>
        <Route path='/Contato' element={<Contato></Contato>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/Cadastro' element={<Cadastro></Cadastro>}/>
        <Route path='/Editar' element={<Editar></Editar>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
