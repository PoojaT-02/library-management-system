import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Signcomponent from "./Signin";
import Books from "./Books";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Signcomponent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={ <Books />} />
          <Route path="*" element={<Signcomponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
