import "./styles/index.css"
import {createRoot} from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
    <div className="bg-blue-950 min-h-screen">
        <App />
    </div>
);