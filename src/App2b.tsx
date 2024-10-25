import { useState } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";

function App() {
	const [count, setCount] = useState(0);
	useBroadcastChannel<typeof count>("count2", (e) => setCount(e.data));
	return (
		<>
			<h1>2. Write-only/Read-only (受信側)</h1>
			<div className="count">{count}</div>
		</>
	);
}
export default App;
