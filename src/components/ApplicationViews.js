import { Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NotFoundPage from "./notfound404/NotFoundPage";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import LocationEditForm from "./location/LocationEditForm";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";

import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";

import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import Login from "./auth/Login";

import NotFoundID from "./animal/IdNotFound";
{
  /* // Check if credentials are in session storage returns true/false */
}
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        {/* //HOME */}
        <Route
          exact
          path="/"
          render={(props) => {
            if (isAuthenticated()) {
              return <Home {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* ///////////////////ANIMALS/////////////////// */}
        {/* updated route: `/animals` */}
        <Route
          exact
          path="/animals"
          render={(props) => {
            if (isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/new"
          render={(props) => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={(props) => {
            if (isAuthenticated()) {
              return (
                <AnimalDetail
                  animalId={parseInt(props.match.params.animalId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={(props) => {
            if (isAuthenticated()) {
              return <AnimalEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        ); }} />
        {/* ///////////////////LOCATIONS/////////////////// */}
        <Route
          exact
          path="/locations"
          render={(props) => {
            if (isAuthenticated()) {
              return <LocationList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/locations/new"
          render={(props) => {
            return <LocationForm {...props} />;
          }}
        />
        <Route
          exact
          path="/locations/:locationId(\d+)"
          render={(props) => {
            if (isAuthenticated()) {
              return (
                <LocationDetail
                  locationId={parseInt(props.match.params.locationId)}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/locations/:locationId(\d+)/edit"
          render={(props) => {
            if (isAuthenticated()) {
              return <LocationEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* ///////////////////EPLOYEES/////////////////// */}
        <Route
          exact
          path="/employees"
          render={(props) => {
            if (isAuthenticated()) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* // Our shiny new route. */}
        <Route
          path="/employees/new"
          render={(props) => {
            return <EmployeeForm {...props} />;
          }}
        />
        <Route
          exact
          path="/employees/:employeeId(\d+)/edit"
          render={(props) => {
            if (isAuthenticated()) {
              return <EmployeeEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* ///////////////////OWNERS/////////////////// */}
        <Route
          exact
          path="/owners"
          render={(props) => {
            if (isAuthenticated()) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* // Our shiny new route. */}
        <Route
          path="/owners/new"
          render={(props) => {
            return <OwnerForm {...props} />;
          }}
        />
        <Route
          exact
          path="/owners/:ownerId(\d+)/edit"
          render={(props) => {
            if (isAuthenticated()) {
              return <OwnerEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* ///////////////////FOR WHEN THINGS BREAK/////////////////// */}
        <Route path="/noIdinDB" component={NotFoundID} />
        <Route
          render={(props) => {
            return <NotFoundPage />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
