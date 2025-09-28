import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Layout = () => {
  return (
    <>
      <Helmet>
        <title>BitBash | Digital Solutions</title>
        <meta
          name="description"
          content="BitBash offers top-notch digital solutions ranging from software development to design services. Collaborate with us for unparalleled digital success."
        />
        <link rel="canonical" href="https://www.bitbash.dev/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BitBash",
            url: "https://www.bitbash.dev",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lahore",
              addressRegion: "Punjab",
              postalCode: "54000",
              streetAddress: "L-39 khayaban e amin, khayaban e amin",
            },
            telephone: "+923104985441",
            email: "help@bitbash.com",
            logo: "https://www.bitbash.dev/With%20curve.png", // Adjust this to your actual logo URL
          })}
        </script>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
