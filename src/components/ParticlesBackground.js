import React from "react";
import Particles from "react-particles";

const ParticlesBackground = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#FFFDD0",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 6,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FFFDD0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 4,
          duration: 4,
          opacity: -1,
          speed: 10,
        },
        repulse: {
          distance: 200,
          duration: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh", // <------ FIXED
        top: 0,
        left: 0,
        zIndex: 0, // make sure it's under the content
      }}
    >
      <Particles
        id="particles-js"
        options={particlesOptions}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
