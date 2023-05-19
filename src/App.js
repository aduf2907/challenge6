import CariMobil from "./components/CariMobil";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Landingpage from "./components/Landingpage";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/cars">
            <Navigation />
            <Hero />
            <CariMobil />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
