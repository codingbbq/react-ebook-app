import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { ScrollToTop } from "./components";
import { FilterProvider } from "./context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<FilterProvider>
				<ScrollToTop />
				<ToastContainer position="bottom-right" />
				<App />
			</FilterProvider>
		</Router>
	</React.StrictMode>
);
