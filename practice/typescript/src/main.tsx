import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CounterProvider from "./context/CounterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
