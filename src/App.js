import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Gigs from './pages/Gigs';
import AddGigs from './pages/AddGigs';
import Messages from './pages/Messages';
import Orders from './pages/Orders'
import Home from './pages/Home';
import Category from './pages/Category';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import ChatPage from './pages/ChatPage';
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
            <Route path='/messages/123' element={<ChatPage/>} />
            <Route path='/category' element={<Category/>} />
            <Route path='/product/1' element={<ProductPage/>} />
         </Routes>
         <Footer/>
      </Router>
  
  

    </div>
  );
}

export default App;
