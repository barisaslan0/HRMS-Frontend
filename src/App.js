import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import AddJobPosting from "./pages/AddJobPosting";
import ConfirmJobPosting from "./pages/ConfirmJobPosting";
import JobPostingDetail from "./pages/JobPostingDetail";
import ExamineJobPostingDetail from "./pages/ExamineJobPostingDetail";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import { Switch, useHistory } from "react-router-dom";
import RegisterJobseeker from "./pages/RegisterJobseeker";
import LoginJobseeker from "./pages/LoginJobseeker";
import RegisterEmployer from "./pages/RegisterEmployer";
import LoginEmployer from "./pages/LoginEmployer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SignedInJobseeker from "./layouts/SignedInJobseeker";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handleSignIn(params) {
    setIsAuthenticated(true);
    history.push("/jobpostings")
  }

  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/home")
  }
  return (
    <div className="app">
      <ToastContainer position="top-right" />
      <Container className="main">
        {isAuthenticated ? (
          <SignedInJobseeker signOut={handleSignOut}></SignedInJobseeker>
        ) : (
          <Navi></Navi>
        )}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/registerjobseeker"
            component={() => (
              <RegisterJobseeker signIn={handleSignIn}></RegisterJobseeker>
            )}
          ></Route>
          <Route
            exact
            path="/loginjobseeker"
            component={() => (
              <LoginJobseeker signIn={handleSignIn}></LoginJobseeker>
            )}
          ></Route>
          <Route
            exact
            path="/registeremployer"
            component={RegisterEmployer}
          ></Route>
          <Route exact path="/loginemployer" component={LoginEmployer}></Route>
          <Route exact path="/jobpostings" component={Dashboard}></Route>
          <Route
            exact
            path="/jobpostings/add"
            component={AddJobPosting}
          ></Route>
          <Route
            exact
            path="/confirmjobposting"
            component={ConfirmJobPosting}
          ></Route>
          <Route
            exact
            path="/jobpostings/:jobPostingId"
            component={JobPostingDetail}
          ></Route>
          <Route
            exact
            path="/examinejobposting/:jobPostingId"
            component={ExamineJobPostingDetail}
          ></Route>
        </Switch>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
