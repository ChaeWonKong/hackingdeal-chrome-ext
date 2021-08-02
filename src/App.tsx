import React from "react";
import { createShorthandPropertyAssignment } from "typescript";

export default function App() {
  const onClick = () => {
    /* @ts-ignore */
    chrome.tabs.executeScript({
      file: "contentScript.js",
    });
  };

  return (
    <div>
      <button onClick={onClick}>원화 변환</button>
    </div>
  );
}
