import { useEffect, useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import type { App4DataType } from "./App4type";

function App() {
	const [data, setData] = useState<App4DataType>();
	useBroadcastChannel<App4DataType>("count4", (e) => {
		console.log(e.data);
		setData(e.data);
	});
	const postReq = useBroadcastChannel("count4b");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		postReq("request");
	}, []);

	return (
		<>
			<h1>4. オブジェクト通信 (受信側)</h1>
			<div className="count">{data?.count}</div>
			<p>{data?.msg}</p>
		</>
	);
}
export default App;
