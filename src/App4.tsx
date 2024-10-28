import { useEffect, useRef, useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import { Links } from "./App";
import type { App4DataType } from "./App4type";
import { OpenInNewWindow2 } from "./Utils";

function App() {
	const [data, setData] = useState<App4DataType>({ count: 0, msg: "hello" });
	const postCount = useBroadcastChannel<App4DataType>("count4");
	const countRef = useRef(data);
	useEffect(() => {
		console.log(`useEffect() data=${{ data }}`);
		postCount(data);
		countRef.current = data;
	}, [data, postCount]);
	useBroadcastChannel("count4b", (e: MessageEvent<string>) => {
		console.log(`useBroadcastChannel(count4b) ${e.data} data=${{ data }}`);
		postCount(countRef.current);
	});

	const handleClick = (num: number) => {
		return () => {
			const newData = { ...data, count: data.count + num };
			setData(newData);
		};
	};

	return (
		<>
			<h1>4. オブジェクト通信 (送信側)</h1>
			<p>
				<OpenInNewWindow2 receiverURL={"/4b"} />
			</p>
			<p className="btns">
				<button type="button" onClick={handleClick(-1)}>
					-
				</button>
				<span className="count">{data.count}</span>
				<button type="button" onClick={handleClick(1)}>
					+
				</button>
			</p>
			<p>{data.msg}</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
