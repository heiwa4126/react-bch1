import { useEffect, useRef, useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import { Links } from "./App";
import { OpenInNewWindow2 } from "./Utils";
import type { BC4, Data4 } from "./type4";

function App() {
	const [data, setData] = useState<Data4>({ count: 0, msg: "hello" });
	const postCount = (() => {
		const p0 = useBroadcastChannel<BC4>("count4");
		return (d: Data4) => {
			p0(d as BC4);
		};
	})();
	const countRef = useRef(data);
	useEffect(() => {
		console.log(data);
		postCount(data);
		countRef.current = data;
	}, [data, postCount]);
	useBroadcastChannel("count4b", (e: MessageEvent<string>) => {
		console.log(e, data);
		postCount(countRef.current);
	});

	const handleClick = (num: number) => () => {
		setData({ ...data, count: data.count + num });
		// TODO: 本番ではimmerとか使うこと。いまは説明用
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
			<p>
				<input
					className="msg"
					type="text"
					value={data.msg}
					onChange={(e) => setData({ ...data, msg: e.target.value })}
					// TODO: 本番ではimmerとか使うこと。いまは説明用
				/>
			</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
