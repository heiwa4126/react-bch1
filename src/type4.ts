export interface Data4 {
	count: number;
	msg: string;
}

export interface BC4 extends Data4 {
	[key: string]: unknown; // useBroadcastChannel()のために必要
}
