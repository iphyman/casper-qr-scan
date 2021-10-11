import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import store from "store";
import { GlobalStyle } from "./GlobalStyle";
import TranslationProvider from "providers/TranslationProvider";
import ThemeProvider from "providers/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <TranslationProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </TranslationProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
