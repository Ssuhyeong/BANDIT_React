import lottie from "lottie-web";
import { useEffect } from "react";
import animationData from "../assets/audience.json";

const Animation = (props) => {
  // const container = document.querySelector("#container");

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => instance.destroy();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="lottie" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Animation;
