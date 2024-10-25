import { useEffect, useRef, useState } from "react";

export function useBroadcastChannel(channelName: string) {
	const [message, setMessage] = useState(undefined);
	const bcRef = useRef<BroadcastChannel>();

	useEffect(() => {
		const bc = new BroadcastChannel(channelName);
		bcRef.current = bc;
		bc.onmessage = (e) => {
			setMessage(e.data);
		};
		return () => {
			bc.close();
		};
	}, [channelName]);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const postMessage = (msg: any) => {
		bcRef.current?.postMessage(msg);
	};

	return [message, postMessage];
}
