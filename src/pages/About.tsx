import { Helmet } from "react-helmet-async";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import profilePicture from "../pub/profile.png";
import Skills from "../components/Skills";
import { useInView, animated } from "@react-spring/web";
import { useEffect } from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";
function About() {
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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <div className="mb-10 -mt-10">
            <AnimatedText
              className="!text-7xl"
              centerClass={{ display: "flex", flexWrap: "wrap", justifyContent :"center" }}
              text="Passion is the driving force behind a sense of purpose."
            />
          </div>
          <div className="flex relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className=" absolute top-0 left-2 -z-10 w-[101%] h-[102%]  rounded-[2rem] bg-dark" />
            <div className="w-2/3 shadow-2xl rounded-2xl bg-light">
              <img
                src={profilePicture}
                alt="Web Developer"
                title="Web Developer"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-start justify-start ml-10">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">
                Introduction
              </h2>
              <p>
                Greetings! My name is Maciek, and I am thrilled to share my
                passion for web development with you in this portfolio.
              </p>
              <p className="py-2">
                I am committed to mastering the tools and techniques for both
                front-end and back-end development, in order to create robust,
                accessible and efficient web applications.
              </p>
              {/* <p className="py-4">
                With an insatiable curiosity and an eagerness to learn, I always
                seek out new challenges and opportunities to improve my
                programming abilities.
              </p> */}
              <p className="py-2">
                With a diverse background that includes military service and
                part-time web development, I bring a unique perspective to the
                field that is grounded in discipline, adaptability, and openness
                to innovation.
              </p>

              <p className="py-2">
                Through my service, I gained a deep appreciation for the
                importance of both meaningful work and positive, collaborative
                relationships in achieving a shared goal.
              </p>

              <p className="py-2">
                While my primary focus is on programming and web development, I
                am also drawn to the mysteries and questions surrounding
                cosmology and the universe.
              </p>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
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
