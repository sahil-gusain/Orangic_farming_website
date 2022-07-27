import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './component/sidebar';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      
    </Routes>
    <Sidebar/>
    </BrowserRouter>
  );
}

export default App;
