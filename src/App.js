import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Editar from './pages/Editar';
import Carrinho from './pages/Carrinho';
import Singin from './pages/Signin';
import Signup from './pages/Signup';
import useAuth from "../src/hooks/useAuth";
import { AuthProvider } from "./contexts/auth";

function App(props) {

  const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Singin />;
  };

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/'  element={<Singin/>}/>
        <Route path='/Singup' element={<Signup/>}/>
        <Route path='/Home' element={<Private Item={Main} />}/>
        <Route path='/Sobre' element={<Sobre></Sobre>}/>
        <Route path='/Contato' element={<Contato></Contato>}/>
        <Route path='/Editar' element={<Editar></Editar>}/>
        <Route path='/Carrinho' element={<Carrinho></Carrinho>}/>
      </Routes>
    <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
