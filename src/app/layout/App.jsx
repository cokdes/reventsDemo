import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import HomePage from "../../features/home/HomePage";
import EventForm from "../../features/event/EventForm/EventForm";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingDashboard from "../../features/user/Settings/SettingDashboard";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingDashboard} />
                <Route
                  path={["/createEvents", "/manage/:id"]}
                  component={EventForm}
                />
                <Route path="/test" component={TestComponent} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
