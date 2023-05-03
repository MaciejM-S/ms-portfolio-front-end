import { useEffect, useState } from "react";


function useModeSwitcher() {
  const darkPrefQuery = "( prefer-color-scheme:dark )";
  const [theme, setTheme] = useState(window.localStorage.currentMode||'light');

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
      window.localStorage.setItem('currentMode','dark')
      document.documentElement.classList.add('dark')
    }else{
      window.localStorage.setItem('currentMode','light')
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  return [theme, setTheme] as const;
}

export default useModeSwitcher;
