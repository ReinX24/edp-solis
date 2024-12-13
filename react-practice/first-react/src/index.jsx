//* React facts project
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

// import "./index.css";
// import { createRoot } from "react-dom/client";
// import { Fragment } from "react"; // takes up less DOM nodes, which renders page faster
// import Header from "./Header"; // importing Header component from another file
// import MainContent from "./MainContent";
// import Footer from "./Footer";

// const root = createRoot(document.getElementById("root"));

// function Page() {
// 	return (
// 		<Fragment>
// 			<Header />
// 			<MainContent />
// 			<Footer />
// 		</Fragment>
// 	);
// }

// root.render(<Page />);
