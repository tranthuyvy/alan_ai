import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "c9b10b56abd5fe0376c02b15545232172e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Hello, ttv</h1>
    </div>
  );
};

export default App;
