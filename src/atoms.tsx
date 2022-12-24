import { atom, selector } from "recoil";

export const minuteState = atom({
	key: "minutes",
	default: 0,
});

export const hourSelector = selector({
	key: "hours",
	get: ({ get }) => {
		const minutes = get(minuteState);
		return minutes / 60;
	},
	// newValue → input:hours에서 입력받은 값
	set: ({ set }, newValue) => {
		const minutes = Number(newValue) * 60;
		set(minuteState, minutes);
	},
});
