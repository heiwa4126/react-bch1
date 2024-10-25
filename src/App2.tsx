import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import { useBroadcastChannel } from "use-broadcast-channel";
import { Links } from "./App";
import { _blank, windowFeatures } from "./Utils";

function App() {
	const receiverURL = "/2b";
	const [count, setCount] = useState(0);
	const postUserId = useBroadcastChannel<typeof count>("count2");
	const location = useHref(receiverURL);

	const handleClick = (num: number) => {
		return () => {
			setCount((prev) => prev + num);
			postUserId(count);
		};
	};

	return (
		<>
			<h1>2. Write-only/Read-only (送信側)</h1>
			<button type="button" onClick={handleClick(-1)}>
				-
			</button>
			<button type="button" onClick={handleClick(1)}>
				+
			</button>
			<p>
				<a
					href={location}
					onClick={(e) => {
						e.preventDefault(); // デフォルトのリンク動作を防ぐ
						window.open(location, _blank, windowFeatures);
					}}
				>
					受信側を別のウインドウで開く
				</a>
				{" | "}
				<Link to={receiverURL} target={_blank}>
					受信側を別タブで開く
				</Link>
			</p>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
