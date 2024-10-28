import { useEffect, useRef } from "react";
import { useBroadcastChannel } from "use-broadcast-channel";
import type { Data5 } from "./type5";

interface BC5 extends Data5 {
	[key: string]: unknown; // useBroadcastChannel()のために必要
}

const ch1 = "count5";
const ch2 = "count5b";
const cmd1 = "request";

export function useCustomBroadcastTx(data: Data5) {
	const postCount = useBroadcastChannel<BC5>(ch1);

	const countRef = useRef(data);

	useEffect(() => {
		console.log(data);
		postCount(data as BC5);
		countRef.current = data;
	}, [data, postCount]);

	useBroadcastChannel(ch2, (e: MessageEvent<string>) => {
		// 今のところコマンドが1種類しかない
		console.log(e, data);
		postCount(countRef.current as BC5);
	});
}

export function useCustomBroadcastChannelRx(setData: (data: Data5) => void) {
	useBroadcastChannel<BC5>(ch1, (e) => {
		console.log(e.data);
		setData(e.data);
	});
	const postReq = useBroadcastChannel(ch2);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		postReq(cmd1);
	}, []);
}
