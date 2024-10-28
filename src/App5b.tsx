import { useState } from "react";
import { useCustomBroadcastChannelRx } from "./hook5";
import type { Data5 } from "./type5";

function App() {
	const [data, setData] = useState<Data5>();
	useCustomBroadcastChannelRx(setData);

	return (
		<>
			<h1>5. オブジェクト通信改良 (受信側)</h1>
			<div className="count">{data?.count}</div>
			<p>{data?.msg}</p>
		</>
	);
}

export default App;
