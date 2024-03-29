import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import reportWebVitals from "./reportWebVitals";

Sentry.init({
  dsn: "https://249a04defa72413c890bcb3e5b34af3a@o507147.ingest.sentry.io/5597832",
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    console.log(event, hint);
    return event;
  },
  allowUrls: [/https?:\/\/storage\.sunzi\.cool/],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
