import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
import App2b from "./App2b";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App2 />} />
				<Route path="/index.html" element={<App2 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
				<Route path="/2" element={<App2 />} />
				<Route path="/2b" element={<App2b />} />
			</Routes>
		</>
	);
}

export function Links() {
	return (
		<ol reversed>
			<li>
				<Link to="/2">Write-only/Read-only (送信側)</Link>
			</li>
			<li>
				<Link to="/1">read/write (送受信兼用)</Link>
			</li>
		</ol>
	);
}

export default App;
