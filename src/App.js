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
import RegisterJobseeker from "./pages/Jobseeker/RegisterJobseeker";
import LoginJobseeker from "./pages/Jobseeker/LoginJobseeker";
import RegisterEmployer from "./pages/Employer/RegisterEmployer";
import LoginEmployer from "./pages/Employer/LoginEmployer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SignedInJobseeker from "./layouts/SignedInJobseeker";
import CurriculumVitaeList from "./pages/Jobseeker/CV/CurriculumVitaeList";
import Settings from "./pages/Jobseeker/SettingsJobseeker";
import Profile from "./pages/Jobseeker/ProfileJobseeker";
import CurriculumVitaeDetail from "./pages/Jobseeker/CV/CurriculumVitaeDetail";
import LoginSystemPersonnal from "./pages/SystemPersonnal/LoginSystemPersonnal";
import SignedInSystemPersonnal from "./layouts/SignedInSystemPersonnal";
import ProfileJobseeker from "./pages/Jobseeker/ProfileJobseeker";
import SettingsJobseeker from "./pages/Jobseeker/SettingsJobseeker";
import ProfileSystemPersonnal from "./pages/SystemPersonnal/ProfileSystemPersonnal";
import FavoriteList from "./pages/Jobseeker/Favorite/FavoriteList";

function App() {
  const [isAuthenticatedJobseeker, setIsAuthenticatedJobseeker] =
    useState(false);

  // const [isAuthenticatedSystemPersonnal, setIsAuthenticatedSystemPersonnal] =
  //   useState(false);

  const history = useHistory();

  const handleSignInJobseeker = () => {
    setIsAuthenticatedJobseeker(true);
    history.push("/jobpostings");
  }

  const handleSignOutJobseeker = () => {
    setIsAuthenticatedJobseeker(false);
    history.push("/home");
  }

  // const handleSignInSystemPersonnal = () => {
  //   setIsAuthenticatedSystemPersonnal(true);
  //   history.push("/jobpostings");
  // }

  // const handleSignOutSystemPersonnal = () => {
  //   setIsAuthenticatedSystemPersonnal(false);
  //   history.push("/home");
  // }
  return (
    <div className="app">
      <ToastContainer position="top-right" />
      <Route exact path="/jobpostings" component={Dashboard}></Route>
      <Container className="main">
        {isAuthenticatedJobseeker ? (
          <SignedInJobseeker
            signOutJobseeker={handleSignOutJobseeker}
          ></SignedInJobseeker>
        ) : (
          <Navi></Navi>
        )}
        {/* {isAuthenticatedSystemPersonnal ? (
          <SignedInSystemPersonnal
            signOut={handleSignOutSystemPersonnal}
          ></SignedInSystemPersonnal>
        ) : (
          <Navi></Navi>
        )} */}
        <Switch>
          <Route
            exact
            path={`/systempersonnal/:userId/profile`}
            component={ProfileSystemPersonnal}
          ></Route>
          <Route
            exact
            path={`/jobseeker/:jobseekerId/profile`}
            component={ProfileJobseeker}
          ></Route>
          <Route
            exact
            path={`/jobseeker/:jobseekerId/curriculumvitaes`}
            component={CurriculumVitaeList}
          ></Route>
          <Route
            exact
            path={`/jobseeker/:jobseekerId/favorites`}
            component={FavoriteList}
          ></Route>
          <Route
            exact
            path={`/jobseeker/:jobseekerId/settings`}
            component={SettingsJobseeker}
          ></Route>
          <Route
            exact
            path="/jobseeker/:jobseekerId/curriculumvitae/:curriculumVitaeId"
            component={CurriculumVitaeDetail}
          ></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/registerjobseeker"
            component={() => (
              <RegisterJobseeker
                signInJobseeker={handleSignInJobseeker}
              ></RegisterJobseeker>
            )}
          ></Route>
          <Route
            exact
            path="/loginjobseeker"
            component={() => (
              <LoginJobseeker
                signInJobseeker={handleSignInJobseeker}
              ></LoginJobseeker>
            )}
          ></Route>
          <Route
            exact
            path="/registeremployer"
            component={RegisterEmployer}
          ></Route>
          <Route exact path="/loginemployer" component={LoginEmployer}></Route>
          <Route
            exact
            path="/loginsystempersonnal"
            component={() => (
              <LoginSystemPersonnal
                // signIn={handleSignInSystemPersonnal}
              ></LoginSystemPersonnal>
            )}
          ></Route>
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
