


import ShopList from "./ShopList";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import HomePage from "./HomePage";
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/second-page" element={<ShopList/>}/>
        </Routes>
    </Router>
  );
}

export default App;
