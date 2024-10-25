import { useEffect, useRef, useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import { Links } from "./App";
import { OpenInNewWindow2 } from "./Utils";

function App() {
	const [count, setCount] = useState(0);
	const postCount = useBroadcastChannel<typeof count>("count3");
	const countRef = useRef(count);
	useEffect(() => {
		postCount(count);
		countRef.current = count;
	}, [count, postCount]);
	useBroadcastChannel("count3b", (_e: MessageEvent<string>) => {
		// console.log(e.data);
		postCount(countRef.current);
	});

	const handleClick = (num: number) => {
		return () => setCount((prev) => prev + num);
	};

	return (
		<>
			<h1>3. Write-only/Read-only改良 (送信側)</h1>
			<p>
				<OpenInNewWindow2 receiverURL={"/3b"} />
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
