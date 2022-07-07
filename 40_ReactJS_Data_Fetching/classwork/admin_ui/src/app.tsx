import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppointmentsPage } from "./pages/appointments";
import { ViewAppointmentPage } from "./pages/view-appointment";
import { LoginPage } from "./pages/login";
import { UserContext } from "./context/user";
import { capitalize } from "./shared/helpers/string.capitalize";

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
            {/* authorized only */}
            <Route index element={<AppointmentsPage />} />
            {/* authorized only */}
            <Route path=":appointmentId" element={<ViewAppointmentPage />} />
          </Route>
          {/* de-authorized only */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  );
};

export const App = React.memo(AppComponent);
App.displayName = "App";
