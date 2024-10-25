import { useBroadcastState } from "use-broadcast-channel";
import { Links } from "./App";
import { OpenInNewWindow } from "./Utils";

function App() {
	const [count, setCount] = useBroadcastState<number>("count", 0);

	const handleClick = (num: number) => {
		return () => setCount((prev) => prev + num);
	};

	return (
		<>
			<h1>1. read/write 送受信兼用</h1>
			<p className="btns">
				<button type="button" onClick={handleClick(-1)}>
					-
				</button>
				<span className="count">{count}</span>
				<button type="button" onClick={handleClick(1)}>
					+
				</button>
			</p>
			<p>
				<OpenInNewWindow />
			</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
