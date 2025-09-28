import React from "react";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "./Components/404Page/NotFoundPage.jsx";
import TestimonialPage from "./Components/Testimonials/TestimonialPage.jsx";
import Team from "./Components/Team/Team.jsx";
import Home from "./Components/Header/Home.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import ServicePage from "./Components/SerivcePage/ServicePage.jsx";
import Career from "./Components/Career/Career.jsx";
import ServiceDetail from "./Components/ServiceWorkDetailPageTempalte/DetailsTemplate.jsx";
import Work from "./Components/Work/Work.jsx";
import ProductPage from "./Components/product/ProductPage.jsx";
import ProductDetailPage from "./Components/product/ProductDetailPage.jsx";
import Layout from "./Layout.jsx";
import Analytics from "./GoogleAnalytics";
import WorkDetail from "./Components/workdetailtemplate/WorkTemplateColumn.jsx";
import CaseStudy from "./Components/SuccessStories/casestudy.jsx";

import BitBash from "./Components/lifeatbitbash/bitbash.jsx";

// Remove the temporary inline component

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "Team", element: <Team /> },
        { path: "Testimonials", element: <TestimonialPage /> },
        { path: "Success-Stories", element: <CaseStudy /> },
        { path: "Contact-us", element: <ContactUs /> },
        { path: "Service-page", element: <ServicePage /> },
        { path: "Service-Details/:id", element: <ServiceDetail /> },
        { path: "Career", element: <Career /> },
        { path: "Work", element: <Work /> },
        { path: "Work-Details/:id", element: <WorkDetail /> },
        { path: "Products", element: <ProductPage /> },
        { path: "ProductDetailPage/:productId", element: <ProductDetailPage /> },
        { path: "bitbash", element: <BitBash /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <Analytics />
      {element}
    </>
  );
}

export default App;