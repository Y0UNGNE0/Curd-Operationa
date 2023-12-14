import logo from './logo.svg';
import Table from './Components/Create';

// import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';




function App() {
  return (<div className='conatiner'>
    <BrowserRouter>  
    <Routes>
      
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<Update/>} />

        
       
 
    </Routes>
    </BrowserRouter> </div>
   
  );
}

export default App;
