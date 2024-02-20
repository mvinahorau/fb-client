import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import AppProvider from "./AppProvider";
import "configs/i18n";

const tagManagerArgs = {
  gtmId: "GTM-MBZC43Z",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppProvider />);
