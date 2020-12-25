import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

export const Canvas: React.FC<{}> = () => {
  const setup = (p5: p5Types, parent: Element) => {
    p5.createCanvas(600, 600);
  };
  const draw = (p5: p5Types) => {
    p5.background("#000");
  };
  return <Sketch setup={setup} draw={draw} />;
};
