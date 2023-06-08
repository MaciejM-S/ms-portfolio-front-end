import { Helmet } from "react-helmet-async";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
// import profilePicture from "../pub/profile.png";
import Skills from "../components/Skills";
import { useInView, animated } from "@react-spring/web";
import Experience from "../components/Experience";
import Education from "../components/Education";
import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import LoadingAnimation from "../components/LoadingAnimation";
function About() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [pageLoaded, setPageLoaded] = React.useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

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
        <title>About</title>
        <meta
          name="description"
          content="web developer skills education experience"
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      {!pageLoaded && <LoadingAnimation />}

      <PageTransition>
        <main
          className="flex w-full flex-col items-center justify-center"
          style={
            pageLoaded
              ? { height: "auto" }
              : { overflow: "hidden", height: "100vh" }
          }
        >
          <Layout>
            <div className="mb-10 -mt-10">
              {pageLoaded && (
                <AnimatedText
                  className="!text-6xl xl:!text-5xl lg:!text-5xl  md:!text-4xl sm:!text-3xl xs:!text-2xl"
                  centerClass={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: width < 1250 ? `${0.1 * width - 10}px` : "0",
                  }}
                  text="Passion is the driving force behind a sense of purpose."
                />
              )}
            </div>
            <div className="flex items-start relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:flex-col md:px-2 w-[70%] lg:w-[90%] md:w-[100%] md:p-4 mx-auto">
              <div className=" absolute top-0 left-1 -z-10 w-[101%] h-[102%] md:h-[101%] rounded-[2rem] rounded-br-2xl bg-dark dark:bg-light" />
              <div className="flex flex-col items-start justify-start ml-10 xl:text-sm xl:ml-0 xl:mx-5 ">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light xl:mt-8">
                  Introduction
                </h2>
                <p>
                  Greetings! My name is Maciek, and I am thrilled to share my
                  passion for web development with you in this portfolio.
                </p>

                <p className="py-2">
                  I am dedicated to mastering both front-end and back-end
                  development, with a specific focus on React for the front-end
                  and Node.js with SQL and NoSQL databases for the back-end. My
                  goal is to create robust, accessible, and efficient web
                  applications that seamlessly combine dynamic user interfaces
                  with powerful server-side functionalities.
                </p>
                <p className="py-2">
                  My background encompasses military service and part-time web
                  development, giving me a diverse perspective in the field.
                  This has instilled in me a strong sense of discipline,
                  adaptability, and a willingness to embrace innovative
                  approaches.
                </p>
                <p className="py-2">
                  Through my experiences, I have come to appreciate the value of
                  meaningful work and the importance of positive collaboration
                  in achieving shared goals. These principles guide my approach
                  to web development, ensuring that I not only create
                  outstanding applications but also foster a supportive and
                  cooperative environment throughout the development process.
                </p>           
              </div>
            </div>
            <Skills />
            <Experience width={width} />
            <Education width={width} />
          </Layout>
        </main>
      </PageTransition>
    </>
  );
}

export default About;
