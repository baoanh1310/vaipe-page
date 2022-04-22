import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Team from "./Pages/Team/Team.jsx";
import Objective from "./Pages/Objective/Objective.jsx";
import Publication from "./Pages/Publication/Publication.jsx";
import News from "./Pages/News/News.jsx";
import NewsDetail from "./Pages/NewsDetail/NewsDetail.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Acknowledge from "./Pages/Acknowledge/Acknowledge";
import Resource from "./Pages/Resource/Resource";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/objective" component={Objective} />
            <Route exact path="/publication" component={Publication} />
            <Route exact path="/acknowledge" component={Acknowledge} />
            <Route exact path="/resource" component={Resource} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/news-detail/:id" component={NewsDetail} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
