import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import AddJobPosting from "./pages/AddJobPosting"


function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi></Navi>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/home" component={Dashboard}></Route>
        <Route exact path="/jobpostings/add" component={AddJobPosting}></Route>
      </Container>
    </div>
  );
}

export default App;
