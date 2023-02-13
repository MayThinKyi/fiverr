import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Gigs from './pages/Gigs';
import AddGigs from './pages/AddGigs';
import Messages from './pages/Messages';
import Orders from './pages/Orders'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
         <Routes>
        
         <Route path='/' element={<Home/>} />
            <Route path='/gigs' element={<Gigs/>} />
            <Route path='/add-gigs' element={<AddGigs/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/messages' element={<Messages/>} />
         </Routes>
        
      </Router>
  
  

    </div>
  );
}

export default App;
