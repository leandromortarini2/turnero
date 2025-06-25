import { Route, Routes } from "react-router-dom";
import RegisterAppointment from "../modules/register/RegisterAppointment";
import Home from "../modules/home/Home";
import Admin from "../modules/admin/Admin";
import Screen from "../modules/screen/Screen";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Screen />} />
        <Route path="/register-appointment" element={<RegisterAppointment />} />
        <Route path="/screen-appointment" element={<Screen />} />
        <Route path="/admin-appointment" element={<Admin />} />
      </Route>
    </Routes>
  );
};
