import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppointmentsPage } from "./pages/appointments";
import { ViewAppointmentPage } from "./pages/view-appointment";
import { LoginPage } from "./pages/login";
import { UserContext } from "./context/user";
import { capitalize } from "./shared/helpers/string.capitalize";
import { AuthorizedGuard, DeAuthorizedGuard } from "./components/guard";

const AppComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <header>
        <h1>Hello, {user ? capitalize(user.fullName) : "Guest"}!</h1>
      </header>
      <main>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <AuthorizedGuard>
                  <AppointmentsPage />
                </AuthorizedGuard>
              }
            />
            <Route
              path=":appointmentId"
              element={
                <AuthorizedGuard>
                  <ViewAppointmentPage />
                </AuthorizedGuard>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <DeAuthorizedGuard>
                <LoginPage />
              </DeAuthorizedGuard>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export const App = React.memo(AppComponent);
App.displayName = "App";
