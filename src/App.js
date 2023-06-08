
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Upadate from './Components/Upadate';
import AddPage from './Components/AddPage';
import { createContext } from 'react';

const rows = [
  { id: 0, title: 'MI', status: 'Completed' },
  { id: 1, title: 'CSK', status: 'Completed' },
  { id: 2, title: 'RCB', status: 'Incompleted' }
];
export let data = createContext()

function App() {
  return (
    <div >
      <data.Provider value={rows}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addpage' element={<AddPage />} />
          <Route path='/update/:id/:title1/:status1' element={<Upadate />} />
        </Routes>
      </data.Provider>
    </div>
  );
}

export default App;
