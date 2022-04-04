import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Profile from './Components/Profile'
import AddProfile from './Components/AddProfile'
import Welcome from './Components/Welcome'
import EditProfile from './Components/EditProfile'

function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
          {/* <Navigation /> */}
        <Routes>
            <Route path="/" element={<Welcome />} exact />
            <Route path="/AddProfile" element={<AddProfile />} exact />
            {/* <Route path="/Profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
