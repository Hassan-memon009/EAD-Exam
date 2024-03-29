import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProductDetailsPage = React.lazy(() => import("pages/ProductDetails"));
const LandingPage = React.lazy(() =>
  import("pages/LandingPage/navbar and All products")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route
            path="/productdetails/:productId"
            element={<ProductDetailsPage />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
