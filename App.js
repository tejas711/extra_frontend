import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/LandingPage';
import SingIn from './component/Signin';
import Register from './component/Register';
import Myvideos from './component/Myvideos';
import Search from './component/Search';
// import Upload from './component/Upload';

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign' element={<SingIn/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/myvideos' element={<Myvideos/>}/>
      <Route path='/search' element={<Search/>}/>
      {/* <Route path='/upload' element={<Upload/>}/> */}

    

    </Routes>
  </BrowserRouter>


    
    </>
  );
}

export default App;
