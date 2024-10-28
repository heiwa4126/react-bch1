import { produce } from "immer";

export interface Data5 {
	count: number;
	msg: string;
}

export const changeCount = produce((draft: Data5, value: number) => {
	draft.count = value;
});

export const changeMsg = produce((draft: Data5, value: string) => {
	draft.msg = value;
});
