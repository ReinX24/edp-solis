//* Personal code
import "./index.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
	<main>
		<img src="/src/assets/react.svg" style={{ width: 40 }} alt="React logo" />
		<h1>Fun facts about React</h1>
		<ul>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100K stars on GitHub</li>
			<li>Is maintained by Meta</li>
			<li>Powers thousands of enterprise apps, including mobile apps</li>
		</ul>
	</main>
);

// const root = createRoot(document.getElementById("root"));

// const header = document.createElement("h1");
// header.textContent = "Hello, React!";
// header.classList.add("header");
// document.getElementById("root").appendChild(header);

// React component
// function MainContent() {
// 	return <h1>React is great!</h1>;
// }

// root.render(
// 	<div>
// 		<MainContent />
// 		<MainContent />
// 		<MainContent />
// 	</div>
// );

//* Original code
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
