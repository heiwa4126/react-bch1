import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
import App2b from "./App2b";
import App3 from "./App3";
import App3b from "./App3b";
import App4 from "./App4";
import App4b from "./App4b";
import App5 from "./App5";
import App5b from "./App5b";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App5 />} />
				<Route path="/index.html" element={<App5 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
				<Route path="/2" element={<App2 />} />
				<Route path="/2b" element={<App2b />} />
				<Route path="/3" element={<App3 />} />
				<Route path="/3b" element={<App3b />} />
				<Route path="/4" element={<App4 />} />
				<Route path="/4b" element={<App4b />} />
				<Route path="/5" element={<App5 />} />
				<Route path="/5b" element={<App5b />} />
			</Routes>
		</>
	);
}

export function Links() {
	return (
		<ol reversed>
			<li>
				<Link to="/5">オブジェクト通信改良 (送信側)</Link>
			</li>
			<li>
				<Link to="/4">オブジェクト通信 (送信側)</Link>
			</li>
			<li>
				<Link to="/3">Write-only/Read-only改良 (送信側)</Link>
			</li>
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
