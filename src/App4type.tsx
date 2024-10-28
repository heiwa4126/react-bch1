export interface App4DataType {
	count: number;
	msg: string;
	[key: string]: unknown; // useBroadcastChannel()のために必要
}

export interface App4DataTypeBC extends App4DataType {
	[key: string]: unknown; // useBroadcastChannel()のために必要
}
