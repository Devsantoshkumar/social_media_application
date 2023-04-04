import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Profile from './pages/profile/Profile';


function App(){
  return (
    <div className="App">
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/auth" element={<Auth/>}/>
             <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
