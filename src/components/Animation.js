import lottie from "lottie-web";
import { useEffect } from "react";
import animationData from "../assets/audience.json";

const Animation = (props) => {
  const container = document.querySelector("#container");

  useEffect(() => {
    lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="container" style={{ width: "400px" }}></div>
    </div>
  );
};

export default Animation;
