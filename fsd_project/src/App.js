//import About from './pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './pages/Home1.jsx';
import { Auth } from './Auth.jsx';
import Addcode from './services/Addcode.jsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<Home1/>}/>
        <Route path='/addcode' element={<Addcode/>}/>
        {/* <Route path='/' element={}/> */}
      </Routes>
    </BrowserRouter>
      {/* <Home1 /> */}

      
    </>
  );
}

export default App;
