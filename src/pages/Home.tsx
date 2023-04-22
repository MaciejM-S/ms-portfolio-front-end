import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import HireMe from "../components/HireMe";
import mainPicture from "../pub/2.png";
import DownloadIcon from "@mui/icons-material/Download";

const paragraphClass = "text-lg";

function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <img src={mainPicture} alt="maciek" className="h-auto w-full" />
            </div>
            <div className="w-1/2 flex flex-col items-left self-center">
              <AnimatedText
                className="!text-5xl"
                text="Hi, my name is Maciek."
              />

              <p className={paragraphClass}>
                I'm a web developer with motivation to create solutions that
                make a difference.
                I believe that web development is not just about writing code.
                It's about crafting an experience that users will love, from
                intuitive interfaces to seamless navigation.
              </p>

              <div className="flex items-center mt-4">
                <a
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
                  download={true}
                >
                  Resume <DownloadIcon sx={{ ml: 0.5 }} />{" "}
                </a>
                <a
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </a>
              </div>
            </div>
            <HireMe />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Home;
