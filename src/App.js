import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Profile from './Components/Profile'
import AddProfile from './Components/AddProfile'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Navigation />

        <Routes>
            <Route path="/" element={<AddProfile />} exact />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
