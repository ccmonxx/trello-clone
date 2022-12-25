import { atom } from "recoil";

// 2. 객체형태의 상태를 type하기
interface IToDosState {
	[key: string]: string[];
}

export const toDosState = atom<IToDosState>({
	key: "toDo",
	// 1. state를 객체 형태로 변환
	// default: ["a", "b", "c", "d", "e", "f"],
	default: {
		to_do: ["a", "b"],
		doing: ["c", "d"],
		done: ["e", "f"],
	},
});
