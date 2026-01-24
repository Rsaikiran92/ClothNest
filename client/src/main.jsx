import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as UIProvider } from "./components/ui/provider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}> 
      <UIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIProvider>
    </ReduxProvider>
  </StrictMode>,
);
