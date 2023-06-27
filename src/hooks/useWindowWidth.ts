import { useState, useEffect } from "react";

export const useWindowWidth = (): number => {
  if (typeof window === "undefined") {
    console.log("You are on the browser,You are good to go");
    return 100;
  } else {
    console.log("You are on the server,Cannot execute");

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return width;
  }
};
