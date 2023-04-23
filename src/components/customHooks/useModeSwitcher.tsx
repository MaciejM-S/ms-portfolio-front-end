import { useEffect, useState } from "react";

function useModeSwitcher() {
  const darkPrefQuery = "( prefer-color-scheme:dark )";
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkPrefQuery);
    const userPref = window.localStorage.getItem("current-mode");

    const handleSwitch = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setTheme(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setTheme(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("switch", handleSwitch);
    return () => {
      mediaQuery.removeEventListener("change", handleSwitch);
    };
  }, []);


  useEffect(()=>{
    if(theme==='dark'){
      window.localStorage.setItem('current-mode','dark')
      document.documentElement.classList.add('dark')
    }else{
      window.localStorage.setItem('current-mode','light')
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  return <></>;
}

export default useModeSwitcher;
