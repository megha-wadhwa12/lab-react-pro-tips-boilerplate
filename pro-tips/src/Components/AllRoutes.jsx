import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import RegistrationForm from "./RegistrationForm";
import {Routes , Route} from "react-router-dom"
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./PrivateRoute";
import Info from "./Info";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/info" element={<PrivateRoute><Info /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
