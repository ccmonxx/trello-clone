import { atom } from "recoil";

// useForm을 통해 받은 toDo 객체를 담을 예정
// toDo → [ {id: 1, text: "A"} ]
export interface IToDo {
	id: number;
	text: string;
}

interface IToDosState {
	[key: string]: IToDo[];
}

export const toDosState = atom<IToDosState>({
	key: "toDo",
	default: {
		to_do: [],
		doing: [],
		done: [],
	},
});
