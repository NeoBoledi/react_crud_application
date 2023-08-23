import './App.css';
import AddMembers from './components/AddMembers'
import Home from './components/Home'
import EditMembers from './components/EditMembers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<AddMembers />} />
        <Route path='/edit/:id' element={<EditMembers />} />
      </Routes>
    </Router>
  );
}

export default App;
