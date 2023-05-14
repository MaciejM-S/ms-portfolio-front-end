import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserProvider } from "./contexts/userContext";

function MainBars() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </UserProvider>
    </>
  );
}
export default MainBars;
