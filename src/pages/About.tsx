import { Helmet } from "react-helmet-async";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import profilePicture from "../pub/profile.png";
import Skills from "../components/Skills";
import { useInView, animated } from "@react-spring/web";
import Experience from "../components/Experience";
import Education from "../components/Education";
import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
function About() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

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
      <PageTransition>
        <main className="flex w-full flex-col items-center justify-center">
          <Layout>
            <div className="mb-10 -mt-10">
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
            </div>
            <div className="flex items-start relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:flex-col md:px-2 ">
              <div className=" absolute top-0 left-1 -z-10 w-[101%] h-[102%]  rounded-[2rem] rounded-br-2xl bg-dark dark:bg-light" />
              <div className="flex flex-col justify-center w-full h-auto max-w-[30%] min-w-[250px] shadow-2xl rounded-2xl bg-light dark:bg-dark mt-12 xl:min-w-[200px] xl:mx-auto xl:max-w-[50%]">
                <img
                  src={profilePicture}
                  alt="Web Developer"
                  title="Web Developer"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="flex flex-col items-start justify-start ml-10 xl:text-sm xl:ml-0 xl:mx-5">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light xl:mt-8">
                  Introduction
                </h2>
                <p>
                  Greetings! My name is Maciek, and I am thrilled to share my
                  passion for web development with you in this portfolio.
                </p>
                <p className="py-2">
                  I am committed to mastering the tools and techniques for both
                  front-end and back-end development. My goal is to create
                  robust, accessible, and efficient web applications.
                </p>
                <p className="py-2">
                  With a diverse background that includes military service and
                  part-time web development, I bring a unique perspective to the
                  field that is grounded in discipline, adaptability, and
                  openness to innovation.
                </p>

                <p className="py-2">
                  Through my service, I gained a deep appreciation for the
                  importance of both meaningful work and positive, collaborative
                  relationships in achieving a shared goal.
                </p>

                <p className="py-2">
                  While my primary focus is on programming and web development,
                  I am also drawn to the mysteries and questions surrounding
                  cosmology and the universe.
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
function AppearingSkills() {
  const [ref, inView] = useInView();

  return (
    <animated.div ref={ref}>
      {inView ? (
        <div className="h-[110vh]">
          <Skills />
        </div>
      ) : (
        <div className="h-[110vh]" />
      )}
    </animated.div>
  );
}
export default About;
