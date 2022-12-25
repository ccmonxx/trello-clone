import { atom } from "recoil";

interface IToDosState {
	[key: string]: string[];
}

export const toDosState = atom<IToDosState>({
	key: "toDo",
	default: {
		to_do: ["a", "b"],
		doing: ["c", "d"],
		done: ["e", "f"],
	},
});
