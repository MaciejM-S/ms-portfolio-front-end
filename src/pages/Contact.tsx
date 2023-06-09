import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import ContactDetails from "../components/ContactDetails";
import EmailMe from "../components/EmailMe";
import PageTransition from "../components/PageTransition";
import LoadingAnimation from "../components/LoadingAnimation";
import React from "react";
import { Helmet } from "react-helmet-async";


function Contact() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const [pageLoaded, setPageLoaded] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
     <Helmet>
        <title>Contact</title>
        <meta
          name="contact"
          content="contact informatio mail-form"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {!pageLoaded && <LoadingAnimation />}
      <PageTransition>
        <Layout className="xs:!px-0">
          <div className="flex items-center justify-center">
            <AnimatedText
              className="!text-6xl xl:!text-5xl lg:!text-5xl  md:!text-4xl sm:!text-3xl xs:!text-2xl  "
              centerClass={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: width < 1250 ? `${0.1 * width - 10}px` : "-30px",
              }}
              text={pageLoaded ? "Get in touch" : " "}
            />
          </div>
          <div className="flex w-2/3 mx-auto pt-10 2xl:w-4/5 xl:w-full xl:px-8 lg:flex-col xs:px-2 ">
            <div className="w-1/2 lg:w-full ">
              <ContactDetails />
            </div>
            <div className="w-1/2 lg:w-full">
              <EmailMe />
            </div>
          </div>
        </Layout>
      </PageTransition>
    </>
  );
}

export default Contact;
