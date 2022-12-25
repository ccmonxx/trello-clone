import { atom, selector } from "recoil";

export const toDosState = atom({
	key: "toDo",
	default: ["a", "b", "c", "d", "e", "f"],
});
