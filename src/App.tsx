import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App1 />} />
				<Route path="/index.html" element={<App1 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
			</Routes>
		</>
	);
}

export function Links() {
	return (
		<ol reversed>
			<li>
				<Link className="a1" to="/1">
					use-broadcast-channel 例
				</Link>
			</li>
		</ol>
	);
}

export default App;
