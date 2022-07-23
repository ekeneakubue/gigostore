import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Carousel from "./Components/carousel/Carousel"
import Banner from "./Components/Banner/Banner"


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Banner />
        <Carousel/>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
