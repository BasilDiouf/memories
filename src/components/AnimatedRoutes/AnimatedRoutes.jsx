import { Route, Routes, useLocation } from "react-router-dom";
import { Carousel } from "../Carousel/Carousel";
import { Homepage } from "../Homepage/Homepage";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { SignupForm } from "../SignupForm/SignupForm";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/memories" element={<Carousel />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/signup" element={<SignupForm />} />,
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
