import { useBroadcastState } from "use-broadcast-channel";
import { OpenInNewWindow } from "./Utils";
import { Links } from "./App";

function App() {
	const [count, setCount] = useBroadcastState<number>("count", 0);

	return (
		<>
			<h1>1. use-broadcast-channel 例</h1>
			<button type="button" onClick={() => setCount((prev) => prev - 1)}>
				-
			</button>
			<span className="count">{count}</span>
			<button type="button" onClick={() => setCount((prev) => prev + 1)}>
				+
			</button>
			<p>
				<OpenInNewWindow />
			</p>
			<Links />
		</>
	);
}
export default App;
