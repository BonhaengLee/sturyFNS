// import { useEffect, useState } from "react";

// export const useDarkMode = (): [string, () => void] => {

//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     if (theme === "light") {
//       window.localStorage.setItem("theme", "light");
//       setTheme("light");
//     } else if (theme === "dark") {
//       window.localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("theme");
//     localTheme && setTheme(localTheme);
//   }, []);

//   return [theme, toggleTheme];
// };