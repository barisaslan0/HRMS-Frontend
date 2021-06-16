import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import AddJobPosting from "./pages/AddJobPosting"
import ConfirmJobPosting from "./pages/ConfirmJobPosting";
import JobPostingDetail from "./pages/JobPostingDetail";
import ExamineJobPostingDetail from "./pages/ExamineJobPostingDetail";

function App() {
  return (
    <div className="app">
      <Container className="main">
        <Navi></Navi>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/home" component={Dashboard}></Route>
        <Route exact path="/jobpostings/add" component={AddJobPosting}></Route>
        <Route exact path="/confirmjobposting" component={ConfirmJobPosting}></Route>
        <Route exact path="/jobpostings/:jobPostingId" component={JobPostingDetail}></Route>
        <Route exact path="/examinejobposting/:jobPostingId" component={ExamineJobPostingDetail}></Route>
      </Container>
    </div>
  );
}

export default App;
