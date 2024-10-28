import { useState } from "react";
import { Links } from "./App";
import { OpenInNewWindow2 } from "./Utils";
import { useCustomBroadcastTx } from "./hook5";
import { type Data5, changeCount, changeMsg } from "./type5";

function App() {
	const [data, setData] = useState<Data5>({ count: 0, msg: "hello" });
	useCustomBroadcastTx(data);

	const handleClick = (num: number) => () => {
		setData(changeCount(data, data.count + num));
	};

	return (
		<>
			<h1>5. オブジェクト通信改良 (送信側)</h1>
			<p>
				<OpenInNewWindow2 receiverURL={"/5b"} />
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
					onChange={(e) => setData(changeMsg(data, e.target.value))}
				/>
			</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
