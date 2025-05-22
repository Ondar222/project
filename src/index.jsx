import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MacbookAir } from "./screens/MacbookAir/MacbookAir";

const App = () => (
  <StrictMode>
    <div className="app-container">
      <MacbookAir />
    </div>
  </StrictMode>
);

const rootElement = document.getElementById("app");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
