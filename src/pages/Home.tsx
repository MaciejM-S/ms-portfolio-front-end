import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import HireMe from "../components/HireMe";
import mainPicture from "../pub/2.png";
import DownloadIcon from "@mui/icons-material/Download";
import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";

const paragraphClass = "text-lg lg:text-center md:text-sm s:text-xs";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
    <PageTransition>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <img
                src={mainPicture}
                alt="maciek"
                className="h-auto w-full lg:hidden md:inline-block "
              />
            </div>
            <div className="w-1/2 lg:w-full flex flex-col items-left self-center ">
              <AnimatedText
                className="!text-5xl xl:!text-4xl lg:!text-5xl md:!text-4xl sm:!text-2xl xs:!text-base"
                centerClass={
                  width < 1000
                    ? {
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                   
                      }
                    : false
                }
                text="Hi, my name is Maciek."
              />

              <p className={paragraphClass}>
                I'm a web developer with motivation to create solutions that
                make a difference. I believe that web development is not just
                about writing code. It's about crafting an experience that users
                will love, from intuitive interfaces to seamless navigation.
              </p>

              <div className="flex items-center mt-4 lg:ml-auto lg:mr-auto">
                <a
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base 
             
                  "
                  download={true}
                >
                  Resume <DownloadIcon sx={{ ml: 0.5 }} />{" "}
                </a>
                <a
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      <HireMe />
      </PageTransition>
    </>
  );
}

export default Home;
