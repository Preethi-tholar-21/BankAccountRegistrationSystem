
import { BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import UserRegistration from './Components/UserRegistration';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Home" Component={Home} />
          <Route path="/Register" Component={UserRegistration} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
