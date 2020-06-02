import React from "react";
import { HelloWorldTitle } from "./HelloWorld.styles";

const HelloWorld = () => {
  return (
    <div>
      <HelloWorldTitle className="hello-world__title">
        Hello World!
      </HelloWorldTitle>
    </div>
  );
};

export default HelloWorld;
