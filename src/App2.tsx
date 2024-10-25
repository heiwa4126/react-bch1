import { useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import { Links } from "./App";
import { OpenInNewWindow2 } from "./Utils";

function App() {
	const [count, setCount] = useState(0);
	const postUserId = useBroadcastChannel<typeof count>("count2");

	const handleClick = (num: number) => {
		return () => {
			setCount((prev) => prev + num);
			postUserId(count);
		};
	};

	return (
		<>
			<h1>2. Write-only/Read-only (送信側)</h1>
			<p>
				<OpenInNewWindow2 receiverURL={"/2b"} />
			</p>
			<p className="btns">
				<button type="button" onClick={handleClick(-1)}>
					-
				</button>
				<button type="button" onClick={handleClick(1)}>
					+
				</button>
			</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
