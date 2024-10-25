import { useEffect, useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";

function App() {
	const [count, setCount] = useState<number>();
	useBroadcastChannel<typeof count>("count3", (e) => setCount(e.data));
	const postReq = useBroadcastChannel("count3b");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		postReq("request");
	}, []);

	return (
		<>
			<h1>3. Write-only/Read-only改良 (受信側)</h1>
			<div className="count">{count}</div>
		</>
	);
}
export default App;
